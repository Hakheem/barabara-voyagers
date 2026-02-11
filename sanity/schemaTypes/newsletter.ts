import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletterSignup",
  title: "Newsletter Signup",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "subscribedAt",
      title: "Subscribed At",
      type: "datetime",
    }),
    defineField({ name: "source", title: "Source", type: "string" }),
    defineField({
      name: "confirmed",
      title: "Confirmed",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: { select: { title: "email", subtitle: "name" } },
});
