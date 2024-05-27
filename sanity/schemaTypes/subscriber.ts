// File: schemas/subscriber.ts
import { defineField, defineType } from 'sanity';

export const subscriber = defineType({
  name: 'subscriber',
  title: 'Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
  ],
});
