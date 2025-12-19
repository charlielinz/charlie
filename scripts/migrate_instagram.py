import json
import os
import requests
import re
from datetime import datetime

# Configuration
DATA_FILE = '/Users/charlielin/repos/charlie/data/instagram_batch1.json'
IMAGE_BASE_DIR = '/Users/charlielin/repos/charlie/public/img/food'
POST_BASE_DIR = '/Users/charlielin/repos/charlie/posts/food'

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    text = text.strip('-')
    return text

def extract_title(caption):
    # Try to find the location name after 📍
    match = re.search(r'📍\s*([^\n]+)', caption)
    if match:
        return match.group(1).strip()
    return "Instagram Post"

def download_image(url, folder, filename):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            os.makedirs(folder, exist_ok=True)
            path = os.path.join(folder, filename)
            with open(path, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

def migrate():
    with open(DATA_FILE, 'r') as f:
        posts = json.load(f)

    for post in posts:
        caption = post['caption']
        title = extract_title(caption)
        slug = slugify(title)
        
        # Determine image folder
        image_folder = os.path.join(IMAGE_BASE_DIR, slug)
        
        # Download first image as cover
        cover_image_url = post['images'][0]
        cover_image_ext = 'jpg' # Defaulting to jpg, could be smarter
        cover_image_name = f"cover-image.{cover_image_ext}"
        
        print(f"Processing: {title} ({slug})")
        
        if download_image(cover_image_url, image_folder, cover_image_name):
            cover_image_path = f"/img/food/{slug}/{cover_image_name}"
        else:
            cover_image_path = ""
            print(f"Failed to download image for {slug}")

        # Format date
        date_str = post['date'].split('T')[0]
        
        # Prepare Markdown content
        # Note: rate, price, categories, menu are hardcoded/defaulted for now
        # as they require manual mapping usually.
        markdown_content = f"""---
slug: "{slug}"
cover_image: "{cover_image_path}"
title: "{title}"
date: "{date_str}"
rate: "7.0"
price:
  average: ""
  tier: ""
categories: ["Instagram Migration"]
menu: ["Instagram"]
---

{caption}
"""
        
        # Write Markdown file
        post_path = os.path.join(POST_BASE_DIR, f"{slug}.md")
        with open(post_path, 'w') as f:
            f.write(markdown_content)
        print(f"Created post: {post_path}")

if __name__ == "__main__":
    migrate()
