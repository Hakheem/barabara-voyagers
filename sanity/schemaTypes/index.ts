import { type SchemaTypeDefinition } from "sanity";
import blogs from "./blogs";
import code from "./code";
import safaris from "./safaris";
import destinations from "./destinations";
import packages from "./packages";
import testimonials from "./testimonials";
import contactMessage from "./contact";
import newsletterSignup from "./newsletter";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    code,
    blogs,
    safaris,
    packages,
    destinations,
    testimonials,
    contactMessage,
    newsletterSignup,
  ],
};
