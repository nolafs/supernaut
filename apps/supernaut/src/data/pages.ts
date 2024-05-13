import {client, previewClient} from '../lib/client';


export async function PageContent(slug: string, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;
  const content = await gqlClient.pagesCollection({slug, locale});
  return content?.pagesCollection?.items[0];
}
