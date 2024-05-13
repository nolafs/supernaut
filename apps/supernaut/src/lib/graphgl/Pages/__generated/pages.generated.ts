import * as Types from '../../../__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type PagesQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type PagesQuery = { __typename?: 'Query', pages?: { __typename?: 'Pages', pageName?: string | null } | null };



export const PagesDocument = `
    query pages($id: String!, $locale: String, $preview: Boolean) {
  pages(id: $id, locale: $locale, preview: $preview) {
    pageName
  }
}
    `;

export const usePagesQuery = <
      TData = PagesQuery,
      TError = unknown
    >(
      variables: PagesQueryVariables,
      options?: Omit<UseQueryOptions<PagesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PagesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PagesQuery, TError, TData>(
      {
    queryKey: ['pages', variables],
    queryFn: customFetcher<PagesQuery, PagesQueryVariables>(PagesDocument, variables),
    ...options
  }
    )};

usePagesQuery.getKey = (variables: PagesQueryVariables) => ['pages', variables];


usePagesQuery.fetcher = (variables: PagesQueryVariables, options?: RequestInit['headers']) => customFetcher<PagesQuery, PagesQueryVariables>(PagesDocument, variables, options);
