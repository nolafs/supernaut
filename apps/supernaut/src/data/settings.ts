"use server";
import {client, previewClient} from '../lib/client';


export default async function SettingContent(internName: string, locale: string, preview: boolean) {
  const gqlClient = preview ? previewClient : client;
  const content = await gqlClient.settingsCollection({internName, locale});
  return content?.settingsCollection?.items[0];
}
