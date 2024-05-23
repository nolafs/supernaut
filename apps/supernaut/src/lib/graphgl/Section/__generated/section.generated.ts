import * as Types from '../../../__generated/graphql.types';

import { QuoteComponentFieldsFragment, QuoteFieldsFragment } from '../../Quotes/__generated/quoteComponent.generated';
import { SliderFieldsFragment, SliderItemFragment } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { QuoteComponentFieldsFragmentDoc, QuoteFieldsFragmentDoc } from '../../Quotes/__generated/quoteComponent.generated';
import { SliderFieldsFragmentDoc, SliderItemFragmentDoc } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type SectionComponentFields_ContentColumnComponent_Fragment = (
  { __typename?: 'ContentColumnComponent' }
  & ContentColumnComponentFieldsFragment
);

export type SectionComponentFields_ContentImageGridComponent_Fragment = (
  { __typename?: 'ContentImageGridComponent' }
  & ContentImageGridComponentFieldsFragment
);

export type SectionComponentFields_ContentListComponent_Fragment = { __typename?: 'ContentListComponent' };

export type SectionComponentFields_ContentProfileComponent_Fragment = (
  { __typename?: 'ContentProfileComponent' }
  & ContentProfileComponentFieldsFragment
);

export type SectionComponentFields_ContentServiceList_Fragment = (
  { __typename?: 'ContentServiceList' }
  & ContentServiceListFieldsFragment
);

export type SectionComponentFields_ContentVideoComponent_Fragment = (
  { __typename?: 'ContentVideoComponent' }
  & ContentVideoComponentFieldsFragment
);

export type SectionComponentFields_QuoteComponent_Fragment = (
  { __typename?: 'QuoteComponent' }
  & QuoteComponentFieldsFragment
);

export type SectionComponentFields_Slider_Fragment = (
  { __typename?: 'Slider' }
  & SliderFieldsFragment
);

export type SectionComponentFieldsFragment = SectionComponentFields_ContentColumnComponent_Fragment | SectionComponentFields_ContentImageGridComponent_Fragment | SectionComponentFields_ContentListComponent_Fragment | SectionComponentFields_ContentProfileComponent_Fragment | SectionComponentFields_ContentServiceList_Fragment | SectionComponentFields_ContentVideoComponent_Fragment | SectionComponentFields_QuoteComponent_Fragment | SectionComponentFields_Slider_Fragment;

export type ProfileFieldsFragment = { __typename: 'Profile', internalName?: string | null, name?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'ProfileDescription', json: any } | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, socialCollection?: { __typename?: 'ProfileSocialCollection', items: Array<{ __typename: 'SocialMediaItem', type?: string | null, name?: string | null, internalName?: string | null, url?: string | null, id: { __typename?: 'Sys', id: string } } | null> } | null };

export type ContentProfileComponentFieldsFragment = { __typename: 'ContentProfileComponent', mode?: string | null, sys: { __typename?: 'Sys', id: string }, itemsCollection?: { __typename?: 'ContentProfileComponentItemsCollection', items: Array<(
      { __typename?: 'Profile' }
      & ProfileFieldsFragment
    ) | null> } | null };

export type ContentServiceListFieldsFragment = { __typename: 'ContentServiceList', title?: string | null, sys: { __typename?: 'Sys', id: string }, servicesCollection?: { __typename?: 'ContentServiceListServicesCollection', items: Array<{ __typename: 'Category', name?: string | null, sys: { __typename?: 'Sys', id: string }, servicesCollection?: { __typename?: 'CategoryServicesCollection', items: Array<{ __typename: 'Services', name?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type ContentImageGridComponentFieldsFragment = { __typename: 'ContentImageGridComponent', columnsLg?: number | null, columnsMd?: number | null, columnsSm?: number | null, internalName?: string | null, imageVariant?: number | null, gridVariant?: number | null, itemHeight?: number | null, itemWidth?: number | null, sys: { __typename?: 'Sys', id: string }, imagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null> } | null };

export type ContentBodyTextFieldsFragment = { __typename: 'ContentBodyText', internalName?: string | null, body?: { __typename?: 'ContentBodyTextBody', json: any } | null };

export type ContentColumnComponentFieldsFragment = { __typename: 'ContentColumnComponent', type?: string | null, title?: string | null, body?: string | null, hTag?: string | null, label?: string | null, url?: string | null, align?: string | null, padding?: string | null, animationType?: string | null, sys: { __typename?: 'Sys', id: string }, component?: (
    { __typename: 'ContentBodyText' }
    & ContentBodyTextFieldsFragment
  ) | (
    { __typename: 'ContentImageGridComponent' }
    & ContentImageGridComponentFieldsFragment
  ) | null };

export type ContentVideoComponentFieldsFragment = { __typename: 'ContentVideoComponent', title?: string | null, type?: string | null, src?: string | null, videoUpload?: any | null, width?: number | null, height?: number | null, controls?: boolean | null, autoplay?: boolean | null, frame?: boolean | null, sys: { __typename?: 'Sys', id: string } };

export type SectionFieldsFragment = { __typename: 'Section', internalName?: string | null, sectionId?: string | null, marginSize?: string | null, paddingSize?: string | null, marginTop?: boolean | null, marginBottom?: boolean | null, paddingTop?: boolean | null, paddingBottom?: boolean | null, backgroundColor?: string | null, textColor?: string | null, align?: string | null, width?: string | null, height?: string | null, lineTop?: boolean | null, lineBottom?: boolean | null, className?: string | null, animation?: boolean | null, sys: { __typename?: 'Sys', id: string }, component?: (
    { __typename: 'ContentColumnComponent' }
    & SectionComponentFields_ContentColumnComponent_Fragment
  ) | (
    { __typename: 'ContentImageGridComponent' }
    & SectionComponentFields_ContentImageGridComponent_Fragment
  ) | (
    { __typename: 'ContentListComponent' }
    & SectionComponentFields_ContentListComponent_Fragment
  ) | (
    { __typename: 'ContentProfileComponent' }
    & SectionComponentFields_ContentProfileComponent_Fragment
  ) | (
    { __typename: 'ContentServiceList' }
    & SectionComponentFields_ContentServiceList_Fragment
  ) | (
    { __typename: 'ContentVideoComponent' }
    & SectionComponentFields_ContentVideoComponent_Fragment
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
  itemsCollection(limit: 5) {
    items {
      ... on Entry {
        ...ProfileFields
      }
    }
  }
}
    `;
export const ContentImageGridComponentFieldsFragmentDoc = `
    fragment ContentImageGridComponentFields on ContentImageGridComponent {
  __typename
  sys {
    id
  }
  columnsLg
  columnsMd
  columnsSm
  internalName
  imageVariant
  gridVariant
  imagesCollection(limit: 10) {
    items {
      ...AssetFields
    }
  }
  itemHeight
  itemWidth
}
    `;
export const ContentBodyTextFieldsFragmentDoc = `
    fragment ContentBodyTextFields on ContentBodyText {
  __typename
  internalName
  body {
    json
  }
}
    `;
export const ContentColumnComponentFieldsFragmentDoc = `
    fragment ContentColumnComponentFields on ContentColumnComponent {
  __typename
  sys {
    id
  }
  type
  title
  body
  hTag
  label
  url
  align
  padding
  animationType
  component {
    __typename
    ...ContentImageGridComponentFields
    ...ContentBodyTextFields
  }
}
    `;
export const ContentServiceListFieldsFragmentDoc = `
    fragment ContentServiceListFields on ContentServiceList {
  __typename
  sys {
    id
  }
  title
  servicesCollection(limit: 5) {
    items {
      __typename
      sys {
        id
      }
      name
      servicesCollection(limit: 10) {
        items {
          __typename
          sys {
            id
          }
          name
          slug
        }
      }
    }
  }
}
    `;
export const ContentVideoComponentFieldsFragmentDoc = `
    fragment ContentVideoComponentFields on ContentVideoComponent {
  __typename
  sys {
    id
  }
  title
  type
  src
  videoUpload
  width
  height
  controls
  autoplay
  frame
}
    `;
export const SectionComponentFieldsFragmentDoc = `
    fragment SectionComponentFields on SectionComponent {
  ...QuoteComponentFields
  ...SliderFields
  ...ContentProfileComponentFields
  ...ContentColumnComponentFields
  ...ContentServiceListFields
  ...ContentVideoComponentFields
  ...ContentImageGridComponentFields
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
  backgroundColor
  textColor
  align
  width
  height
  lineTop
  lineBottom
  className
  animation
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
${ContentColumnComponentFieldsFragmentDoc}
${ContentImageGridComponentFieldsFragmentDoc}
${ContentBodyTextFieldsFragmentDoc}
${ContentServiceListFieldsFragmentDoc}
${ContentVideoComponentFieldsFragmentDoc}`;

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
