import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getFile = (filename) => {
  const file = fs.readFileSync(path.join("posts", filename));
  return file;
};

const getBasename = (filename) => {
  return path.basename(filename, ".md");
};

const isPostFile = (fileName) => {
  const extname = path.extname(fileName);
  return extname === ".md";
};

export const getFrontmatter = (filename) => {
  return matter(getFile(filename)).data;
};

export const getContent = (filename) => {
  return matter(getFile(filename)).content;
};

export const getPostInfos = () => {
  const files = fs.readdirSync(path.join("posts"));
  const postFiles = files.filter((filename) => isPostFile(filename));
  const postinfos = postFiles.map((filename) => {
    return {
      slug: getBasename(filename),
      frontmatter: getFrontmatter(filename),
      content: getContent(filename),
    };
  });
  return postinfos;
};

export const getPostPaths = () => {
  const files = fs.readdirSync(path.join("posts"));
  const postFiles = files.filter((filename) => isPostFile(filename));
  const postPaths = postFiles.map((filename) => {
    return {
      params: {
        slug: getBasename(filename),
      },
    };
  });
  return postPaths;
};
