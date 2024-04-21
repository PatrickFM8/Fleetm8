import { defineField, defineType } from 'sanity';

export const navitems = defineType({
  name: 'navitems',
  title: 'Navitems',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      name: 'hidden',
      title: 'Is Hidden',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})