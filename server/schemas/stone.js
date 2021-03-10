export default {
  name: "stone",
  title: "Stone",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "granite", title: "Granite" },
          { value: "marble", title: "Marble" },
        ],
      },
    },
    {
      name: "special",
      title: "Special",
      type: "boolean",
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
    },
    {
      name: "bestSeller",
      title: "Best Seller",
      type: "boolean",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
