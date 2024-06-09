import {ContentfulContentSource} from "@stackbit/cms-contentful";
import {defineStackbitConfig} from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "20",
  ssgName: "nextjs",
  devCommand: "./node_modules/.bin/nx run supernaut:build:production",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID!,
      environment: process.env.CONTENTFUL_ENVIRONMENT!,
      previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_MANAGMENT!
    })
  ],
  modelExtensions: [
    {name: "page", type: "page", urlPath: "/{slug}"},
    {name: "work", type: "page", urlPath: "/work/{slug}"}
  ],
});
