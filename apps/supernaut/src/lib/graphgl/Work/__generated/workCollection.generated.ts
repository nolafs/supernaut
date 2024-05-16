import * as Types from '../../../__generated/graphql.types';

import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type WorkFieldsFragment = { __typename: 'Work', title?: string | null, slug?: string | null, publishingDate?: any | null, featured?: boolean | null, sys: { __typename?: 'Sys', id: string }, category?: { __typename?: 'Category', name?: string | null, slug?: string | null, description?: { __typename?: 'CategoryDescription', json: any } | null } | null, featureImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type WorkCollectionQueryVariables = Types.Exact<{
  category?: Types.InputMaybe<Types.CfCategoryNestedFilter>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type WorkCollectionQuery = { __typename?: 'Query', workCollection?: { __typename?: 'WorkCollection', total: number, limit: number, skip: number, items: Array<(
      { __typename?: 'Work' }
      & WorkFieldsFragment
    ) | null> } | null };


export const WorkFieldsFragmentDoc = `
    fragment workFields on Work {
  __typename
  sys {
    id
  }
  title
  category {
    name
    slug
    description {
      json
    }
  }
  slug
  publishingDate
  featured
  featureImage {
    ...AssetFields
  }
}
    `;
export const WorkCollectionDocument = `
    query workCollection($category: cfCategoryNestedFilter, $skip: Int, $limit: Int, $locale: String, $preview: Boolean) {
  workCollection(
    where: {category: $category}
    skip: $skip
    limit: $limit
    locale: $locale
    preview: $preview
    order: [publishingDate_DESC]
  ) {
    total
    limit
    skip
    items {
      ...workFields
    }
  }
}
    ${WorkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useWorkCollectionQuery = <
      TData = WorkCollectionQuery,
      TError = unknown
    >(
      variables?: WorkCollectionQueryVariables,
      options?: Omit<UseQueryOptions<WorkCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<WorkCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<WorkCollectionQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['workCollection'] : ['workCollection', variables],
    queryFn: customFetcher<WorkCollectionQuery, WorkCollectionQueryVariables>(WorkCollectionDocument, variables),
    ...options
  }
    )};

useWorkCollectionQuery.getKey = (variables?: WorkCollectionQueryVariables) => variables === undefined ? ['workCollection'] : ['workCollection', variables];


useWorkCollectionQuery.fetcher = (variables?: WorkCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<WorkCollectionQuery, WorkCollectionQueryVariables>(WorkCollectionDocument, variables, options);
