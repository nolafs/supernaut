import {client, previewClient} from '../lib/client';

export async function WorkCollection( limit: number, skip: number, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;

  console.log('WorkCollection', limit, skip, locale, preview)

  const data = await gqlClient.workCollection({
    skip, limit, locale, preview
  });

  return data;
}

export async function WorkFeaturedCollection(limit: number, skip: number, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;

  const data = await gqlClient.workFeaturedCollection({
    skip, limit, locale, preview
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
