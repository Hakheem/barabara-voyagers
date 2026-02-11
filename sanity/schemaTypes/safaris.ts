import { defineField, defineType } from "sanity";

export default defineType({
  name: "safaris",
  title: "Safari",
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
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),
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
    defineField({
      name: "durationDays",
      title: "Duration (Days)",
      type: "number",
    }),
    defineField({
      name: "durationNights",
      title: "Duration (Nights)",
      type: "number",
    }),
    defineField({ name: "basePrice", title: "Base Price", type: "number" }),
    defineField({ name: "currency", title: "Currency", type: "string" }),
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
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["ACTIVE", "INACTIVE", "DRAFT", "ARCHIVED"] },
    }),
  ],
  preview: { select: { title: "title", media: "images.0" } },
});
