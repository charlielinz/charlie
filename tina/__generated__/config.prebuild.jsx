// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "food",
        label: "Food Posts",
        path: "posts/food",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "image",
            name: "cover_image",
            label: "Cover Image"
          },
          {
            type: "string",
            name: "rate",
            label: "Rating"
          },
          {
            type: "object",
            name: "price",
            label: "Price Information",
            fields: [
              {
                type: "string",
                name: "average",
                label: "Average Price Display"
              },
              {
                type: "string",
                name: "tier",
                label: "Price Tier (for sorting)"
              }
            ]
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true
          },
          {
            type: "string",
            name: "menu",
            label: "Menu Types",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "travel",
        label: "Travel Posts",
        path: "posts/travel",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "string",
            name: "travel_date",
            label: "Travel Date (e.g. 2019-10)",
            required: true
          },
          {
            type: "image",
            name: "cover_image",
            label: "Cover Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
