import * as Types from '../../../__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type ServicesFieldsFragment = { __typename: 'Services', name?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'ServicesDescription', json: any } | null, linkedFrom?: { __typename?: 'ServicesLinkingCollections', workCollection?: { __typename?: 'WorkCollection', total: number, items: Array<{ __typename: 'Work', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type ServiceCollectionQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ServiceCollectionQuery = { __typename?: 'Query', servicesCollection?: { __typename?: 'ServicesCollection', items: Array<(
      { __typename?: 'Services' }
      & ServicesFieldsFragment
    ) | null> } | null };


export const ServicesFieldsFragmentDoc = `
    fragment servicesFields on Services {
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
export const ServiceCollectionDocument = `
    query serviceCollection($locale: String, $preview: Boolean, $limit: Int) {
  servicesCollection(locale: $locale, preview: $preview, limit: $limit) {
    items {
      ...servicesFields
    }
  }
}
    ${ServicesFieldsFragmentDoc}`;

export const useServiceCollectionQuery = <
      TData = ServiceCollectionQuery,
      TError = unknown
    >(
      variables?: ServiceCollectionQueryVariables,
      options?: Omit<UseQueryOptions<ServiceCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ServiceCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ServiceCollectionQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['serviceCollection'] : ['serviceCollection', variables],
    queryFn: customFetcher<ServiceCollectionQuery, ServiceCollectionQueryVariables>(ServiceCollectionDocument, variables),
    ...options
  }
    )};

useServiceCollectionQuery.getKey = (variables?: ServiceCollectionQueryVariables) => variables === undefined ? ['serviceCollection'] : ['serviceCollection', variables];


useServiceCollectionQuery.fetcher = (variables?: ServiceCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<ServiceCollectionQuery, ServiceCollectionQueryVariables>(ServiceCollectionDocument, variables, options);
