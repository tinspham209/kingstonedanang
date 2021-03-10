import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ousajcjn",
  dataset: "production",
  useCdn: "true",
});
