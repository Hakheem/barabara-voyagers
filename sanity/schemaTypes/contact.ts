import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactMessage",
  title: "Contact Message",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "subject", title: "Subject", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text" }),
    defineField({ name: "createdAt", title: "Created At", type: "datetime" }),
    defineField({
      name: "handled",
      title: "Handled",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Where the message originated (contact form, page, etc.)",
    }),
  ],
  preview: {
    select: { title: "subject", subtitle: "email" },
  },
});
