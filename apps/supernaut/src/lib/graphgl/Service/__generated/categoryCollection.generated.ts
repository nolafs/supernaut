import * as Types from '../../../__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type CategoryFieldsFragment = { __typename: 'Category', name?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CategoryDescription', json: any } | null, linkedFrom?: { __typename?: 'CategoryLinkingCollections', workCollection?: { __typename?: 'WorkCollection', total: number, items: Array<{ __typename: 'Work', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type CategoryCollectionQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CategoryCollectionQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<(
      { __typename?: 'Category' }
      & CategoryFieldsFragment
    ) | null> } | null };


export const CategoryFieldsFragmentDoc = `
    fragment CategoryFields on Category {
  __typename
  sys {
    id
  }
  name
  slug
  description {
    json
  }
  linkedFrom {
    workCollection {
      total
      items {
        ... on Work {
          __typename
          sys {
            id
          }
          title
          slug
        }
      }
    }
  }
}
    `;
export const CategoryCollectionDocument = `
    query categoryCollection($locale: String, $preview: Boolean, $limit: Int) {
  categoryCollection(locale: $locale, preview: $preview, limit: $limit) {
    items {
      ...CategoryFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}`;

export const useCategoryCollectionQuery = <
      TData = CategoryCollectionQuery,
      TError = unknown
    >(
      variables?: CategoryCollectionQueryVariables,
      options?: Omit<UseQueryOptions<CategoryCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CategoryCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CategoryCollectionQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['categoryCollection'] : ['categoryCollection', variables],
    queryFn: customFetcher<CategoryCollectionQuery, CategoryCollectionQueryVariables>(CategoryCollectionDocument, variables),
    ...options
  }
    )};

useCategoryCollectionQuery.getKey = (variables?: CategoryCollectionQueryVariables) => variables === undefined ? ['categoryCollection'] : ['categoryCollection', variables];


useCategoryCollectionQuery.fetcher = (variables?: CategoryCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<CategoryCollectionQuery, CategoryCollectionQueryVariables>(CategoryCollectionDocument, variables, options);
