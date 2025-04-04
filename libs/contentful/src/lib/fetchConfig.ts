export const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },

  },
  previewParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  },
};


export function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {

  return async (): Promise<TData> => {

    const res = await fetch(fetchConfig.endpoint as string, {
      method: 'POST',
      ...options,
      ...(variables?.preview ? fetchConfig.previewParams : fetchConfig.params),
      body: JSON.stringify({ query, variables }),
      //next: {revalidate: 60},
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
