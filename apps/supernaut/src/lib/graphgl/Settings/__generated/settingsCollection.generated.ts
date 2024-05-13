import * as Types from '../../../__generated/graphql.types';

import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful/lib/fetchConfig';
export type NavigationPageFieldsFragment = { __typename: 'Pages', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type NavigationItemFieldsFragment = { __typename: 'NavigationItem', internalName?: string | null, slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, subsectionCollection?: { __typename?: 'NavigationItemSubsectionCollection', items: Array<{ __typename: 'NavigationItem', pageName?: string | null, slug?: string | null, iconLibary?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: (
        { __typename?: 'Asset' }
        & AssetFieldsFragment
      ) | null } | null> } | null };

export type SettingsFieldsFragment = { __typename: 'Settings', siteTitle?: string | null, strapline?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, canonicalUrl?: string | null, twitterCardType?: string | null, twitterHandler?: string | null, contactDialogButtonLabel?: string | null, contactFormDialog?: boolean | null, internalName?: string | null, copyrightLine?: string | null, sys: { __typename?: 'Sys', id: string }, ogImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, mainNavigationCollection?: { __typename?: 'SettingsMainNavigationCollection', items: Array<(
      { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } }
      & NavigationItemFieldsFragment
    ) | (
      { __typename: 'Pages', sys: { __typename?: 'Sys', id: string } }
      & NavigationPageFieldsFragment
    ) | null> } | null, footerNavigationCollection?: { __typename?: 'SettingsFooterNavigationCollection', items: Array<(
      { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } }
      & NavigationItemFieldsFragment
    ) | (
      { __typename: 'Pages', sys: { __typename?: 'Sys', id: string } }
      & NavigationPageFieldsFragment
    ) | null> } | null, legalNavigationCollection?: { __typename?: 'SettingsLegalNavigationCollection', items: Array<(
      { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } }
      & NavigationItemFieldsFragment
    ) | (
      { __typename: 'Pages', sys: { __typename?: 'Sys', id: string } }
      & NavigationPageFieldsFragment
    ) | null> } | null, socialMediaCollection?: { __typename?: 'SettingsSocialMediaCollection', items: Array<{ __typename: 'SocialMediaItem', type?: string | null, name?: string | null, internalName?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string }, id: { __typename?: 'Sys', id: string } } | null> } | null };

export type SettingsCollectionQueryVariables = Types.Exact<{
  internName: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SettingsCollectionQuery = { __typename?: 'Query', settingsCollection?: { __typename?: 'SettingsCollection', items: Array<(
      { __typename?: 'Settings' }
      & SettingsFieldsFragment
    ) | null> } | null };


export const NavigationPageFieldsFragmentDoc = `
    fragment NavigationPageFields on Pages {
  __typename
  sys {
    id
  }
  pageName
  internalName: pageName
  slug
}
    `;
export const NavigationItemFieldsFragmentDoc = `
    fragment NavigationItemFields on NavigationItem {
  __typename
  sys {
    id
  }
  internalName
  slug
  pageName
  subsectionCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      pageName
      slug
      icon {
        ...AssetFields
      }
      iconLibary
    }
  }
}
    `;
export const SettingsFieldsFragmentDoc = `
    fragment SettingsFields on Settings {
  __typename
  sys {
    id
  }
  siteTitle
  strapline
  metaTitle
  metaDescription
  metaKeywords
  canonicalUrl
  twitterCardType
  twitterHandler
  contactDialogButtonLabel
  contactFormDialog
  ogImage {
    ...AssetFields
  }
  internalName
  copyrightLine
  mainNavigationCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...NavigationPageFields
      ...NavigationItemFields
    }
  }
  footerNavigationCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...NavigationPageFields
      ...NavigationItemFields
    }
  }
  legalNavigationCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...NavigationPageFields
      ...NavigationItemFields
    }
  }
  socialMediaCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
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
export const SettingsCollectionDocument = `
    query settingsCollection($internName: String!, $locale: String, $preview: Boolean) {
  settingsCollection(
    where: {internalName: $internName}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...SettingsFields
    }
  }
}
    ${SettingsFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${NavigationPageFieldsFragmentDoc}
${NavigationItemFieldsFragmentDoc}`;

export const useSettingsCollectionQuery = <
      TData = SettingsCollectionQuery,
      TError = unknown
    >(
      variables: SettingsCollectionQueryVariables,
      options?: Omit<UseQueryOptions<SettingsCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<SettingsCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<SettingsCollectionQuery, TError, TData>(
      {
    queryKey: ['settingsCollection', variables],
    queryFn: customFetcher<SettingsCollectionQuery, SettingsCollectionQueryVariables>(SettingsCollectionDocument, variables),
    ...options
  }
    )};

useSettingsCollectionQuery.getKey = (variables: SettingsCollectionQueryVariables) => ['settingsCollection', variables];


useSettingsCollectionQuery.fetcher = (variables: SettingsCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<SettingsCollectionQuery, SettingsCollectionQueryVariables>(SettingsCollectionDocument, variables, options);
