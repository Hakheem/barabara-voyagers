import { defineField, defineType } from "sanity";

export default defineType({
  name: "packages",
  title: "Package",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "reference",
      to: [{ type: "destinations" }],
    }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "currency", title: "Currency", type: "string" }),
    defineField({
      name: "image",
      title: "Primary Image",
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
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day", type: "number" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "includes",
      title: "Includes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "excludes",
      title: "Excludes",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
