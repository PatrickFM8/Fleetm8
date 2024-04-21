import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  description: "Add only one",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the hero section",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "SubTitle",
      description: "Sub title of the hero section",
      type: "string",
    }),
    defineField({
      title: "ImageAlignment",
      name: "imageAlignment",
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
