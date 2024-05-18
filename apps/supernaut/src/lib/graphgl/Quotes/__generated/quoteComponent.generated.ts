import * as Types from '../../../__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type QuoteFieldsFragment = { __typename: 'Quotes', quote?: string | null, author?: string | null, position?: string | null, sys: { __typename?: 'Sys', id: string } };

export type QuoteComponentFieldsFragment = { __typename: 'QuoteComponent', internalName?: string | null, autoplay?: boolean | null, slideDuration?: number | null, sys: { __typename?: 'Sys', id: string }, quotesCollection?: { __typename?: 'QuoteComponentQuotesCollection', items: Array<(
      { __typename?: 'Quotes' }
      & QuoteFieldsFragment
    ) | null> } | null };

export type QuoteComponentQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type QuoteComponentQuery = { __typename?: 'Query', quoteComponent?: (
    { __typename?: 'QuoteComponent' }
    & QuoteComponentFieldsFragment
  ) | null };


export const QuoteFieldsFragmentDoc = `
    fragment QuoteFields on Quotes {
  __typename
  sys {
    id
  }
  quote
  author
  position
}
    `;
export const QuoteComponentFieldsFragmentDoc = `
    fragment QuoteComponentFields on QuoteComponent {
  __typename
  sys {
    id
  }
  internalName
  autoplay
  slideDuration
  quotesCollection(limit: 10) {
    items {
      ...QuoteFields
    }
  }
}
    `;
export const QuoteComponentDocument = `
    query QuoteComponent($id: String!, $locale: String, $preview: Boolean) {
  quoteComponent(id: $id, locale: $locale, preview: $preview) {
    ...QuoteComponentFields
  }
}
    ${QuoteComponentFieldsFragmentDoc}
${QuoteFieldsFragmentDoc}`;

export const useQuoteComponentQuery = <
      TData = QuoteComponentQuery,
      TError = unknown
    >(
      variables: QuoteComponentQueryVariables,
      options?: Omit<UseQueryOptions<QuoteComponentQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<QuoteComponentQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<QuoteComponentQuery, TError, TData>(
      {
    queryKey: ['QuoteComponent', variables],
    queryFn: customFetcher<QuoteComponentQuery, QuoteComponentQueryVariables>(QuoteComponentDocument, variables),
    ...options
  }
    )};

useQuoteComponentQuery.getKey = (variables: QuoteComponentQueryVariables) => ['QuoteComponent', variables];


useQuoteComponentQuery.fetcher = (variables: QuoteComponentQueryVariables, options?: RequestInit['headers']) => customFetcher<QuoteComponentQuery, QuoteComponentQueryVariables>(QuoteComponentDocument, variables, options);
