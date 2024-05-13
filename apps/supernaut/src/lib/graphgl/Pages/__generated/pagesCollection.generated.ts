import * as Types from '../../../__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type PageFieldsFragment = { __typename: 'Pages', pageName?: string | null, title?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, id: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'PagesBodyText', json: any } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, topSectionsCollection?: { __typename?: 'PagesTopSectionsCollection', items: Array<{ __typename: 'QuoteComponent', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type PagesCollectionQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type PagesCollectionQuery = { __typename?: 'Query', pagesCollection?: { __typename?: 'PagesCollection', items: Array<(
      { __typename?: 'Pages' }
      & PageFieldsFragment
    ) | null> } | null };


export const PageFieldsFragmentDoc = `
    fragment PageFields on Pages {
  __typename
  sys {
    id
  }
  id: sys {
    id
  }
  pageName
  title
  internalName: pageName
  slug
  bodyText {
    json
  }
  seo {
    title
    description
    image {
      url
    }
    noIndex
    noFollow
  }
  topSectionsCollection(limit: 20) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
    }
  }
}
    `;
export const PagesCollectionDocument = `
    query pagesCollection($slug: String!, $locale: String, $preview: Boolean) {
  pagesCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...PageFields
    }
  }
}
    ${PageFieldsFragmentDoc}`;

export const usePagesCollectionQuery = <
      TData = PagesCollectionQuery,
      TError = unknown
    >(
      variables: PagesCollectionQueryVariables,
      options?: Omit<UseQueryOptions<PagesCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PagesCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PagesCollectionQuery, TError, TData>(
      {
    queryKey: ['pagesCollection', variables],
    queryFn: customFetcher<PagesCollectionQuery, PagesCollectionQueryVariables>(PagesCollectionDocument, variables),
    ...options
  }
    )};

usePagesCollectionQuery.getKey = (variables: PagesCollectionQueryVariables) => ['pagesCollection', variables];


usePagesCollectionQuery.fetcher = (variables: PagesCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<PagesCollectionQuery, PagesCollectionQueryVariables>(PagesCollectionDocument, variables, options);
