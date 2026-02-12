import { defineField, defineType } from "sanity";

export default defineType({
  name: "destinations",
  title: "Destination",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "A catchy phrase (e.g., 'The Cradle of Humanity' or 'The Last Eden')",
    }),
    defineField({ name: "country", title: "Country", type: "string" }),
    defineField({ name: "region", title: "Region", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: { 
    select: { 
      title: "name", 
      subtitle: "tagline",
      media: "mainImage" 
    } 
  },
});
