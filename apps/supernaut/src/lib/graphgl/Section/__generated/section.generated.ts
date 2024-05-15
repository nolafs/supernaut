import * as Types from '../../../__generated/graphql.types';

import { QuoteComponentFieldsFragment, QuoteFieldsFragment } from '../../QuoteItem/__generated/quoteComponent.generated';
import { SliderFieldsFragment, SliderItemFragment } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { QuoteComponentFieldsFragmentDoc, QuoteFieldsFragmentDoc } from '../../QuoteItem/__generated/quoteComponent.generated';
import { SliderFieldsFragmentDoc, SliderItemFragmentDoc } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type SectionComponentFields_ContentColumnComponent_Fragment = (
  { __typename?: 'ContentColumnComponent' }
  & ContentColumnComponentFieldsFragment
);

export type SectionComponentFields_ContentProfileComponent_Fragment = (
  { __typename?: 'ContentProfileComponent' }
  & ContentProfileComponentFieldsFragment
);

export type SectionComponentFields_QuoteComponent_Fragment = (
  { __typename?: 'QuoteComponent' }
  & QuoteComponentFieldsFragment
);

export type SectionComponentFields_Slider_Fragment = (
  { __typename?: 'Slider' }
  & SliderFieldsFragment
);

export type SectionComponentFieldsFragment = SectionComponentFields_ContentColumnComponent_Fragment | SectionComponentFields_ContentProfileComponent_Fragment | SectionComponentFields_QuoteComponent_Fragment | SectionComponentFields_Slider_Fragment;

export type ProfileFieldsFragment = { __typename: 'Profile', internalName?: string | null, name?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'ProfileDescription', json: any } | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, socialCollection?: { __typename?: 'ProfileSocialCollection', items: Array<{ __typename: 'SocialMediaItem', type?: string | null, name?: string | null, internalName?: string | null, url?: string | null, id: { __typename?: 'Sys', id: string } } | null> } | null };

export type ContentProfileComponentFieldsFragment = { __typename: 'ContentProfileComponent', mode?: string | null, sys: { __typename?: 'Sys', id: string }, itemsCollection?: { __typename?: 'ContentProfileComponentItemsCollection', items: Array<(
      { __typename?: 'Profile' }
      & ProfileFieldsFragment
    ) | null> } | null };

export type ContentColumnComponentFieldsFragment = { __typename: 'ContentColumnComponent', mode?: string | null, type?: string | null, title?: string | null, body?: string | null, hTag?: string | null, url?: string | null, align?: string | null, padding?: string | null, sys: { __typename?: 'Sys', id: string } };

export type SectionFieldsFragment = { __typename: 'Section', internalName?: string | null, sectionId?: string | null, marginSize?: string | null, paddingSize?: string | null, marginTop?: boolean | null, marginBottom?: boolean | null, paddingTop?: boolean | null, paddingBottom?: boolean | null, mode?: string | null, backgroundColor?: string | null, textColor?: string | null, align?: string | null, width?: string | null, height?: string | null, lineTop?: boolean | null, lineBottom?: boolean | null, className?: string | null, sys: { __typename?: 'Sys', id: string }, component?: (
    { __typename: 'ContentColumnComponent' }
    & SectionComponentFields_ContentColumnComponent_Fragment
  ) | (
    { __typename: 'ContentProfileComponent' }
    & SectionComponentFields_ContentProfileComponent_Fragment
  ) | (
    { __typename: 'QuoteComponent' }
    & SectionComponentFields_QuoteComponent_Fragment
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


export const ProfileFieldsFragmentDoc = `
    fragment ProfileFields on Profile {
  __typename
  sys {
    id
  }
  internalName
  name
  title
  description {
    json
  }
  image {
    ...AssetFields
  }
  socialCollection(limit: 10) {
    items {
      __typename
      id: sys {
        id
      }
      type
      name
      internalName
      url
    }
  }
}
    `;
export const ContentProfileComponentFieldsFragmentDoc = `
    fragment ContentProfileComponentFields on ContentProfileComponent {
  __typename
  sys {
    id
  }
  mode
  itemsCollection(limit: 10) {
    items {
      ... on Entry {
        ...ProfileFields
      }
    }
  }
}
    `;
export const ContentColumnComponentFieldsFragmentDoc = `
    fragment ContentColumnComponentFields on ContentColumnComponent {
  __typename
  sys {
    id
  }
  mode
  type
  title
  body
  hTag
  url
  align
  padding
}
    `;
export const SectionComponentFieldsFragmentDoc = `
    fragment SectionComponentFields on SectionComponent {
  ...quoteComponentFields
  ...SliderFields
  ...ContentProfileComponentFields
  ...ContentColumnComponentFields
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
${QuoteComponentFieldsFragmentDoc}
${QuoteFieldsFragmentDoc}
${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${AssetFieldsFragmentDoc}
${ContentProfileComponentFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${ContentColumnComponentFieldsFragmentDoc}`;

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
