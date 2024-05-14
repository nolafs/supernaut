import * as Types from '../../../__generated/graphql.types';

import { QuoteFieldsFragment } from '../../QuoteItem/__generated/quoteItem.generated';
import { SliderFieldsFragment, SliderItemFragment } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { QuoteFieldsFragmentDoc } from '../../QuoteItem/__generated/quoteItem.generated';
import { SliderFieldsFragmentDoc, SliderItemFragmentDoc } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type SectionComponentFields_Quotes_Fragment = (
  { __typename?: 'Quotes' }
  & QuoteFieldsFragment
);

export type SectionComponentFields_Slider_Fragment = (
  { __typename?: 'Slider' }
  & SliderFieldsFragment
);

export type SectionComponentFieldsFragment = SectionComponentFields_Quotes_Fragment | SectionComponentFields_Slider_Fragment;

export type SectionFieldsFragment = { __typename: 'Section', internalName?: string | null, sectionId?: string | null, marginSize?: string | null, paddingSize?: string | null, marginTop?: boolean | null, marginBottom?: boolean | null, paddingTop?: boolean | null, paddingBottom?: boolean | null, mode?: string | null, backgroundColor?: string | null, textColor?: string | null, align?: string | null, width?: string | null, height?: string | null, lineTop?: boolean | null, lineBottom?: boolean | null, className?: string | null, sys: { __typename?: 'Sys', id: string }, component?: (
    { __typename: 'Quotes' }
    & SectionComponentFields_Quotes_Fragment
  ) | (
    { __typename: 'Slider' }
    & SectionComponentFields_Slider_Fragment
  ) | null };

export type SectionQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SectionQuery = { __typename?: 'Query', section?: (
    { __typename?: 'Section' }
    & SectionFieldsFragment
  ) | null };


export const SectionComponentFieldsFragmentDoc = `
    fragment SectionComponentFields on SectionComponent {
  ...QuoteFields
  ...SliderFields
}
    `;
export const SectionFieldsFragmentDoc = `
    fragment SectionFields on Section {
  __typename
  sys {
    id
  }
  internalName
  sectionId
  marginSize
  paddingSize
  marginTop
  marginBottom
  paddingTop
  paddingBottom
  mode
  backgroundColor
  textColor
  align
  width
  height
  lineTop
  lineBottom
  className
  component {
    __typename
    ...SectionComponentFields
  }
}
    `;
export const SectionDocument = `
    query section($id: String!, $locale: String, $preview: Boolean) {
  section(id: $id, locale: $locale, preview: $preview) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}
${SectionComponentFieldsFragmentDoc}
${QuoteFieldsFragmentDoc}
${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useSectionQuery = <
      TData = SectionQuery,
      TError = unknown
    >(
      variables: SectionQueryVariables,
      options?: Omit<UseQueryOptions<SectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<SectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<SectionQuery, TError, TData>(
      {
    queryKey: ['section', variables],
    queryFn: customFetcher<SectionQuery, SectionQueryVariables>(SectionDocument, variables),
    ...options
  }
    )};

useSectionQuery.getKey = (variables: SectionQueryVariables) => ['section', variables];


useSectionQuery.fetcher = (variables: SectionQueryVariables, options?: RequestInit['headers']) => customFetcher<SectionQuery, SectionQueryVariables>(SectionDocument, variables, options);
