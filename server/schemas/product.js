export default {
  name: "product",
  title: "Product",
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
          { value: "cauthang", title: "Cầu Thang" },
          { value: "capsanhdon", title: "Cấp, Sảnh đón" },
          { value: "lavobobanquay", title: "Lavobo, Bàn quầy" },
          { value: "trucot", title: "Trụ, Cột" },
          { value: "banbep", title: "Bàn Bếp" },
          { value: "mattien", title: "Mặt Tiền" },
          { value: "banghieuvachdung", title: "Bảng hiệu, Vách dựng" },
          { value: "nenbangheda", title: "Nền, Bàn ghế đá" },
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
