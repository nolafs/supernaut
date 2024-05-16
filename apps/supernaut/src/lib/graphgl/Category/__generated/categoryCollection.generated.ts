import * as Types from '../../../__generated/graphql.types';

import { ServicesFieldsFragment } from '../../Service/__generated/servicesCollection.generated';
import { ServicesFieldsFragmentDoc } from '../../Service/__generated/servicesCollection.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type CategoryFieldsFragment = { __typename: 'Category', name?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CategoryDescription', json: any } | null, servicesCollection?: { __typename?: 'CategoryServicesCollection', items: Array<(
      { __typename?: 'Services' }
      & ServicesFieldsFragment
    ) | null> } | null, linkedFrom?: { __typename?: 'CategoryLinkingCollections', workCollection?: { __typename?: 'WorkCollection', total: number, items: Array<{ __typename: 'Work', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type CategoryCollectionFieldsFragment = { __typename: 'CategoryCollection', total: number, items: Array<(
    { __typename?: 'Category' }
    & CategoryFieldsFragment
  ) | null> };

export type CategoryCollectionQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CategoryCollectionQuery = { __typename?: 'Query', categoryCollection?: (
    { __typename?: 'CategoryCollection' }
    & CategoryCollectionFieldsFragment
  ) | null };


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
  servicesCollection(limit: 10) {
    items {
      ...servicesFields
    }
  }
  linkedFrom {
    workCollection(limit: 10) {
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
export const CategoryCollectionFieldsFragmentDoc = `
    fragment CategoryCollectionFields on CategoryCollection {
  __typename
  total
  items {
    ...CategoryFields
  }
}
    `;
export const CategoryCollectionDocument = `
    query categoryCollection($locale: String, $preview: Boolean, $limit: Int) {
  categoryCollection(locale: $locale, preview: $preview, limit: $limit) {
    ...CategoryCollectionFields
  }
}
    ${CategoryCollectionFieldsFragmentDoc}
${CategoryFieldsFragmentDoc}
${ServicesFieldsFragmentDoc}`;

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
