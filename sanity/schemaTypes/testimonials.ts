import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "clientName", title: "Client Name", type: "string" }),
    defineField({ name: "clientLocation", title: "Location", type: "string" }),
    defineField({ name: "content", title: "Content", type: "text" }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "tripDate", title: "Trip Date", type: "datetime" }),
    defineField({
      name: "relatedPackage",
      title: "Related Package",
      type: "reference",
      to: [{ type: "packages" }],
    }),
  ],
  preview: { select: { title: "clientName", subtitle: "clientLocation" } },
});
