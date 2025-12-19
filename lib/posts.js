import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(type) {
  const fullPath = path.join(postsDirectory, type);
  const fileNames = fs.readdirSync(fullPath);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(fullPath, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const matterResult = matter(fileContents);

      const data = { ...matterResult.data };

      // Ensure dates are serialized as strings for Next.js
      if (data.date instanceof Date) {
        data.date = data.date.toISOString().split("T")[0];
      }
      if (data.travel_date instanceof Date) {
        data.travel_date = data.travel_date.toISOString().split("T")[0];
      }

      return {
        slug,
        ...data,
      };
    });

  // Sort posts by date/travel_date
  return allPostsData.sort((a, b) => {
    const dateA = a.date || a.travel_date || "";
    const dateB = b.date || b.travel_date || "";
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs(type) {
  const fullPath = path.join(postsDirectory, type);
  const fileNames = fs.readdirSync(fullPath);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ""),
        },
      };
    });
}

export async function getPostData(type, slug) {
  const fullPath = path.join(postsDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const data = { ...matterResult.data };

  // Ensure dates are serialized as strings for Next.js
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().split("T")[0];
  }
  if (data.travel_date instanceof Date) {
    data.travel_date = data.travel_date.toISOString().split("T")[0];
  }

  return {
    slug,
    content: matterResult.content,
    ...data,
  };
}
