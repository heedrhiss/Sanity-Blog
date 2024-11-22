import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mjlu4paf", 
  dataset: "production", 
  useCdn: true,
});