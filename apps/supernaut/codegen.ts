import {CodegenConfig} from '@graphql-codegen/cli';
const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const productionEndpoint = 'https://graphql.contentful.com/content/v1/spaces';
export const endpoint = `${endpointOverride || productionEndpoint}/${process.env.CONTENTFUL_SPACE_ID}`;
export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,

  schema: [
    {
      [endpoint || '']: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    './apps/supernaut/src/lib/__generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    './apps/supernaut/src/lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './apps/supernaut/src/lib/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./apps/supernaut/src/lib/graphql/**/*.graphql'],
    },
    './apps/supernaut/src/lib/__generated/sdk.ts': {
      documents: ['./apps/supernaut/src/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request', {
          add: {
            content: '// @ts-nocheck',
          },
        }],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
    './apps/supernaut/src/': {
      documents: ['./apps/supernaut/src/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'lib/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query'
      ],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        reactQueryVersion: 5,
        namingConvention: {
          enumValues: 'keep',
        },
        fetcher: '@supernaut/contentful/lib/fetchConfig#customFetcher',
      },
    },
  },
};

export default config;
