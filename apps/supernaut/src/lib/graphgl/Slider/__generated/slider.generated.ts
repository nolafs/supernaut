import * as Types from '../../../__generated/graphql.types';

import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type SliderItemFragment = { __typename: 'SliderItem', internalName?: string | null, title?: string | null, description?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string }, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type SliderFieldsFragment = { __typename: 'Slider', internalName?: string | null, autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, slidesCollection?: { __typename?: 'SliderSlidesCollection', items: Array<(
      { __typename?: 'SliderItem' }
      & SliderItemFragment
    ) | null> } | null };

export type SliderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SliderQuery = { __typename?: 'Query', slider?: (
    { __typename?: 'Slider' }
    & SliderFieldsFragment
  ) | null };


export const SliderItemFragmentDoc = `
    fragment SliderItem on SliderItem {
  __typename
  sys {
    id
  }
  internalName
  title
  description
  image {
    ...AssetFields
  }
  url
}
    `;
export const SliderFieldsFragmentDoc = `
    fragment SliderFields on Slider {
  __typename
  sys {
    id
  }
  internalName
  autoplay
  slidesCollection(limit: 10) {
    items {
      ...SliderItem
    }
  }
}
    `;
export const SliderDocument = `
    query slider($id: String!, $locale: String, $preview: Boolean) {
  slider(id: $id, locale: $locale, preview: $preview) {
    ...SliderFields
  }
}
    ${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useSliderQuery = <
      TData = SliderQuery,
      TError = unknown
    >(
      variables: SliderQueryVariables,
      options?: Omit<UseQueryOptions<SliderQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<SliderQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<SliderQuery, TError, TData>(
      {
    queryKey: ['slider', variables],
    queryFn: customFetcher<SliderQuery, SliderQueryVariables>(SliderDocument, variables),
    ...options
  }
    )};

useSliderQuery.getKey = (variables: SliderQueryVariables) => ['slider', variables];


useSliderQuery.fetcher = (variables: SliderQueryVariables, options?: RequestInit['headers']) => customFetcher<SliderQuery, SliderQueryVariables>(SliderDocument, variables, options);
