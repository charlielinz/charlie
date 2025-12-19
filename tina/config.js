import { defineConfig } from "tinacms";

// Your hosting provider likely exposes these as environment variables
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "food",
        label: "Food Posts",
        path: "posts/food",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.slug || "new-post"}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Post Title",
            isTitle: true,
            required: true,
            description: "The name of the restaurant or dish",
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
            description: "Used for the post URL (e.g., 'ad-astra-6訪'). Do not use spaces.",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "image",
            name: "cover_image",
            label: "Hero Image",
            description: "The main image displayed at the top of the post",
          },
          {
            type: "string",
            name: "rate",
            label: "Rating (1.0 - 10.0)",
            description: "Enter a number from 1 to 10",
          },
          {
            type: "object",
            name: "price",
            label: "Price Details",
            fields: [
              {
                type: "string",
                name: "average",
                label: "Average Cost",
                description: "e.g., 3980",
              },
              {
                type: "string",
                name: "tier",
                label: "Price Category",
                description: "e.g., $$$ or 4000",
              },
            ],
          },
          {
            type: "string",
            name: "categories",
            label: "Cuisine Categories",
            list: true,
            options: [
              "台式料理",
              "日式料理",
              "法式料理",
              "Fusion",
              "Instagram Migration"
            ]
          },
          {
            type: "string",
            name: "menu",
            label: "Menu Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Review Content",
            isBody: true,
          },
        ],
      },
      {
        name: "travel",
        label: "Travel Posts",
        path: "posts/travel",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.slug || "new-travel-post"}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Trip Title",
            isTitle: true,
            required: true,
            description: "The name of the destination or trip",
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
            description: "Used for the post URL. Do not use spaces.",
          },
          {
            type: "string",
            name: "travel_date",
            label: "Travel Date",
            required: true,
            description: "Format: 2019-10",
          },
          {
            type: "image",
            name: "cover_image",
            label: "Hero Image",
            description: "The main cinematic image for this trip",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Travelogue Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
