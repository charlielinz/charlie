import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');

const DATA_FILE = path.join(repoRoot, 'scripts', 'data', 'raw_posts.json');
const IMAGE_BASE_DIR = path.join(repoRoot, 'public', 'img', 'food');
const POST_BASE_DIR = path.join(repoRoot, 'posts', 'food');

function slugify(text) {
    // Remove @tags (e.g., @adastra.taipei) before slugifying
    const cleanText = text.replace(/@\S+/g, '').replace(/\s+/g, ' ').trim();
    // Keep Chinese characters, alphanumeric, and spaces/dashes
    return cleanText.toLowerCase()
        .replace(/[^\u4e00-\u9fa5a-z0-9\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function extractTitle(caption) {
    const match = caption.match(/📍\s*([^\n]+)/);
    if (match) {
        let title = match[1].trim();
        // Remove @tags from title
        title = title.replace(/@\S+/g, '').replace(/\s+/g, ' ').trim();
        return title;
    }
    return "Instagram Post";
}

async function downloadImage(url, folder, filename) {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://www.instagram.com/'
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }
        
        const filePath = path.join(folder, filename);
        fs.writeFileSync(filePath, buffer);
        console.log(`  Downloaded: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`  Error downloading ${url}:`, error.message);
        return false;
    }
}

async function migrate() {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

    for (const post of data) {
        const caption = post.caption;
        const title = extractTitle(caption);
        let slug = slugify(title);
        
        // If slug is empty after slugifying Chinese, try a fallback or just use the title
        if (!slug) {
            slug = title.replace(/\s+/g, '-');
        }

        const imageFolder = path.join(IMAGE_BASE_DIR, slug);
        const coverImageUrl = post.images[0];
        const coverImageName = `cover-image.jpg`;
        
        console.log(`Processing: ${title} (Slug: ${slug})`);
        
        let coverImagePath = "";
        
        // Ensure image folder exists even if download fails, so user can upload later
        if (!fs.existsSync(imageFolder)) {
            fs.mkdirSync(imageFolder, { recursive: true });
            console.log(`  Created media folder: ${imageFolder}`);
        }

        const success = await downloadImage(coverImageUrl, imageFolder, coverImageName);
        if (success) {
            coverImagePath = `/img/food/${slug}/${coverImageName}`;
        } else {
            console.error(`  Failed to download image for ${slug}`);
        }

        const dateStr = post.date.split('T')[0];
        
        const markdownContent = `---
slug: "${slug}"
cover_image: "${coverImagePath}"
title: "${title}"
date: "${dateStr}"
rate: "7.0"
price:
  average: ""
  tier: ""
categories: ["Instagram Migration"]
menu: ["Instagram"]
---

${caption}
`;
        
        const postPath = path.join(POST_BASE_DIR, `${slug}.md`);
        fs.writeFileSync(postPath, markdownContent);
        console.log(`  Created post: ${postPath}`);
    }
}

migrate();
