import { defineField, defineType } from "sanity";

export const faqs = defineType({
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
    }),
    defineField({
      name: "ishidden",
      title: "Is Hidden",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "newfield",
      title: "New",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
