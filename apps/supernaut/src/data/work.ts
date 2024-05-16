import {client, previewClient} from '../lib/client';

export async function WorkCollection(category: string | null, limit: number, skip: number, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;

  const data = await gqlClient.workCollection({
    category: {
      internalName: category
    }, limit, skip, locale, preview
  });

  return data;
}

export async function WorkFeaturedCollection(limit: number, skip: number, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;

  const data = await gqlClient.workFeaturedCollection({
    limit, locale, preview
  });

  return data;
}


export async function WorkCategoryCollection(limit: number, skip: number, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;

  const data = await gqlClient.categoryCollection({
    limit, locale, preview
  });

  return data;
}
