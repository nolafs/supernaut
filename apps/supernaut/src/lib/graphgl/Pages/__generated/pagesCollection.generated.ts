import * as Types from '../../../__generated/graphql.types';

import { SectionFieldsFragment, SectionComponentFields_ContentColumnComponent_Fragment, SectionComponentFields_ContentImageGridComponent_Fragment, SectionComponentFields_ContentListComponent_Fragment, SectionComponentFields_ContentProfileComponent_Fragment, SectionComponentFields_ContentServiceList_Fragment, SectionComponentFields_ContentVideoComponent_Fragment, SectionComponentFields_QuoteComponent_Fragment, SectionComponentFields_Slider_Fragment, ContentProfileComponentFieldsFragment, ProfileFieldsFragment, ContentColumnComponentFieldsFragment, ContentImageGridComponentFieldsFragment, ContentBodyTextFieldsFragment, ContentServiceListFieldsFragment, ContentVideoComponentFieldsFragment } from '../../Section/__generated/section.generated';
import { QuoteComponentFieldsFragment, QuoteFieldsFragment } from '../../Quotes/__generated/quoteComponent.generated';
import { SliderFieldsFragment, SliderItemFragment } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { SectionFieldsFragmentDoc, SectionComponentFieldsFragmentDoc, ContentProfileComponentFieldsFragmentDoc, ProfileFieldsFragmentDoc, ContentColumnComponentFieldsFragmentDoc, ContentImageGridComponentFieldsFragmentDoc, ContentBodyTextFieldsFragmentDoc, ContentServiceListFieldsFragmentDoc, ContentVideoComponentFieldsFragmentDoc } from '../../Section/__generated/section.generated';
import { QuoteComponentFieldsFragmentDoc, QuoteFieldsFragmentDoc } from '../../Quotes/__generated/quoteComponent.generated';
import { SliderFieldsFragmentDoc, SliderItemFragmentDoc } from '../../Slider/__generated/slider.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type HeaderComponentFieldsFragment = { __typename: 'HeaderComponent', title?: string | null, description?: string | null, mode?: string | null, columnLayout?: boolean | null, marginTop?: boolean | null, marginBottom?: boolean | null, sys: { __typename?: 'Sys', id: string } };

export type PageFieldsFragment = { __typename: 'Pages', pageName?: string | null, title?: string | null, slug?: string | null, mode?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, id: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'PagesBodyText', json: any } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, topSectionsCollection?: { __typename?: 'PagesTopSectionsCollection', items: Array<(
      { __typename: 'HeaderComponent', sys: { __typename?: 'Sys', id: string } }
      & HeaderComponentFieldsFragment
    ) | (
      { __typename: 'Section', sys: { __typename?: 'Sys', id: string } }
      & SectionFieldsFragment
    ) | null> } | null };

export type PagesCollectionQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type PagesCollectionQuery = { __typename?: 'Query', pagesCollection?: { __typename?: 'PagesCollection', items: Array<(
      { __typename?: 'Pages' }
      & PageFieldsFragment
    ) | null> } | null };


export const HeaderComponentFieldsFragmentDoc = `
    fragment HeaderComponentFields on HeaderComponent {
  __typename
  sys {
    id
  }
  title
  description
  mode
  columnLayout
  marginTop
  marginBottom
}
    `;
export const PageFieldsFragmentDoc = `
    fragment PageFields on Pages {
  __typename
  sys {
    id
  }
  id: sys {
    id
  }
  pageName
  title
  internalName: pageName
  slug
  mode
  bodyText {
    json
  }
  seo {
    title
    description
    image {
      url
    }
    noIndex
    noFollow
  }
  topSectionsCollection(limit: 20) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
        ...SectionFields
        ...HeaderComponentFields
      }
    }
  }
}
    `;
export const PagesCollectionDocument = `
    query pagesCollection($slug: String!, $locale: String, $preview: Boolean) {
  pagesCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...PageFields
    }
  }
}
    ${PageFieldsFragmentDoc}
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
${ContentVideoComponentFieldsFragmentDoc}
${HeaderComponentFieldsFragmentDoc}`;

export const usePagesCollectionQuery = <
      TData = PagesCollectionQuery,
      TError = unknown
    >(
      variables: PagesCollectionQueryVariables,
      options?: Omit<UseQueryOptions<PagesCollectionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PagesCollectionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PagesCollectionQuery, TError, TData>(
      {
    queryKey: ['pagesCollection', variables],
    queryFn: customFetcher<PagesCollectionQuery, PagesCollectionQueryVariables>(PagesCollectionDocument, variables),
    ...options
  }
    )};

usePagesCollectionQuery.getKey = (variables: PagesCollectionQueryVariables) => ['pagesCollection', variables];


usePagesCollectionQuery.fetcher = (variables: PagesCollectionQueryVariables, options?: RequestInit['headers']) => customFetcher<PagesCollectionQuery, PagesCollectionQueryVariables>(PagesCollectionDocument, variables, options);
