import { defineField, defineType } from "sanity";

export const feature = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the feature",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "SubTitle",
      description: "Sub title of the feature",
      type: "string",
    }),
    defineField({
      title: "ImageAlignment",
      name: "ImageAlignment",
      type: "string",
      initialValue: "left",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    }),
    defineField({
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    }),
  ],
});
