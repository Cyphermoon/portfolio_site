import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: process.env['NEXT_PUBLIC_SANITY_PROJECT_KEY'] ?? "",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "v2021-08-31",
})