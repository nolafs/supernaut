import * as Types from '../../../__generated/graphql.types';

import { WorkFieldsFragment } from './workCollection.generated';
import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { WorkFieldsFragmentDoc } from './workCollection.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type WorkFeaturedCollectionQueryVariables = Types.Exact<{
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type WorkFeaturedCollectionQuery = { __typename?: 'Query', workCollection?: { __typename?: 'WorkCollection', total: number, limit: number, skip: number, items: Array<(
      { __typename?: 'Work' }
      & WorkFieldsFragment
    ) | null> } | null };



export const WorkFeaturedCollectionDocument = `
    query workFeaturedCollection($skip: Int, $limit: Int, $locale: String, $preview: Boolean) {
  workCollection(
    where: {featured: true}
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

export const useWorkFeaturedCollectionQuery = <
      TData = WorkFeaturedCollectionQuery,
      TError = unknown
    >(
      variables?: WorkFeaturedCollectionQueryVariables,
      options?: Omit<UseQueryOptions<WorkFeaturedCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<WorkFeaturedCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<WorkFeaturedCollectionQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['workFeaturedCollection'] : ['workFeaturedCollection', variables],
    queryFn: customFetcher<WorkFeaturedCollectionQuery, WorkFeaturedCollectionQueryVariables>(WorkFeaturedCollectionDocument, variables),
    ...options
  }
    )};

useWorkFeaturedCollectionQuery.getKey = (variables?: WorkFeaturedCollectionQueryVariables) => variables === undefined ? ['workFeaturedCollection'] : ['workFeaturedCollection', variables];


useWorkFeaturedCollectionQuery.fetcher = (variables?: WorkFeaturedCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<WorkFeaturedCollectionQuery, WorkFeaturedCollectionQueryVariables>(WorkFeaturedCollectionDocument, variables, options);
