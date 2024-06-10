var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_cms_contentful = require("@stackbit/cms-contentful");
var import_types = require("@stackbit/types");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  nodeVersion: "20",
  ssgName: "nextjs",
  devCommand: "./node_modules/.bin/nx run supernaut:dev",
  contentSources: [
    new import_cms_contentful.ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_MANAGMENT
    })
  ],
  modelExtensions: [
    { name: "pages", type: "page", urlPath: "/{slug}" },
    { name: "work", type: "page", urlPath: "/work/{slug}" }
  ]
});
//# sourceMappingURL=stackbit.config.KVHLAJPE.cjs.map
