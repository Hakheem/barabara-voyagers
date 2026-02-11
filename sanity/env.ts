export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-06";

console.log("DEBUG: Project ID from ENV:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("DEBUG: Dataset from ENV:", process.env.NEXT_PUBLIC_SANITY_DATASET);

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) { // Changed this to check for empty strings too
    console.error("DEBUG ERROR:", errorMessage);
    throw new Error(errorMessage);
  }
  return v;
}

