import * as Types from '../../../__generated/graphql.types';

import { WorkFieldsFragment } from './workCollection.generated';
import { AssetFieldsFragment } from '../../Assets/__generated/assets.generated';
import { CategoryFieldsFragment } from '../../Category/__generated/categoryCollection.generated';
import { ServicesFieldsFragment } from '../../Service/__generated/servicesCollection.generated';
import { SectionFieldsFragment, SectionComponentFields_ContentColumnComponent_Fragment, SectionComponentFields_ContentImageGridComponent_Fragment, SectionComponentFields_ContentListComponent_Fragment, SectionComponentFields_ContentProfileComponent_Fragment, SectionComponentFields_ContentServiceList_Fragment, SectionComponentFields_ContentVideoComponent_Fragment, SectionComponentFields_QuoteComponent_Fragment, SectionComponentFields_Slider_Fragment, ContentProfileComponentFieldsFragment, ProfileFieldsFragment, ContentColumnComponentFieldsFragment, ContentImageGridComponentFieldsFragment, ContentBodyTextFieldsFragment, ContentServiceListFieldsFragment, ContentVideoComponentFieldsFragment } from '../../Section/__generated/section.generated';
import { QuoteComponentFieldsFragment, QuoteFieldsFragment } from '../../Quotes/__generated/quoteComponent.generated';
import { SliderFieldsFragment, SliderItemFragment } from '../../Slider/__generated/slider.generated';
import { HeaderComponentFieldsFragment } from '../../Pages/__generated/pagesCollection.generated';
import { WorkFieldsFragmentDoc } from './workCollection.generated';
import { AssetFieldsFragmentDoc } from '../../Assets/__generated/assets.generated';
import { CategoryFieldsFragmentDoc } from '../../Category/__generated/categoryCollection.generated';
import { ServicesFieldsFragmentDoc } from '../../Service/__generated/servicesCollection.generated';
import { SectionFieldsFragmentDoc, SectionComponentFieldsFragmentDoc, ContentProfileComponentFieldsFragmentDoc, ProfileFieldsFragmentDoc, ContentColumnComponentFieldsFragmentDoc, ContentImageGridComponentFieldsFragmentDoc, ContentBodyTextFieldsFragmentDoc, ContentServiceListFieldsFragmentDoc, ContentVideoComponentFieldsFragmentDoc } from '../../Section/__generated/section.generated';
import { QuoteComponentFieldsFragmentDoc, QuoteFieldsFragmentDoc } from '../../Quotes/__generated/quoteComponent.generated';
import { SliderFieldsFragmentDoc, SliderItemFragmentDoc } from '../../Slider/__generated/slider.generated';
import { HeaderComponentFieldsFragmentDoc } from '../../Pages/__generated/pagesCollection.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@supernaut/contentful';
export type WorkFieldsDetailFragment = (
  { __typename?: 'Work', topSectionsCollection?: { __typename?: 'WorkTopSectionsCollection', items: Array<(
      { __typename: 'HeaderComponent', sys: { __typename?: 'Sys', id: string } }
      & HeaderComponentFieldsFragment
    ) | (
      { __typename: 'Section', sys: { __typename?: 'Sys', id: string } }
      & SectionFieldsFragment
    ) | null> } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null }
  & WorkFieldsFragment
);

export type WorkQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type WorkQuery = { __typename?: 'Query', workCollection?: { __typename?: 'WorkCollection', items: Array<(
      { __typename?: 'Work' }
      & WorkFieldsDetailFragment
    ) | null> } | null };


export const WorkFieldsDetailFragmentDoc = `
    fragment workFieldsDetail on Work {
  ...workFields
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
  seo {
    title
    description
    image {
      url
    }
    noIndex
    noFollow
  }
}
    `;
export const WorkDocument = `
    query work($slug: String!, $locale: String, $preview: Boolean) {
  workCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...workFieldsDetail
    }
  }
}
    ${WorkFieldsDetailFragmentDoc}
${WorkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${CategoryFieldsFragmentDoc}
${ServicesFieldsFragmentDoc}
${SectionFieldsFragmentDoc}
${SectionComponentFieldsFragmentDoc}
${QuoteComponentFieldsFragmentDoc}
${QuoteFieldsFragmentDoc}
${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${ContentProfileComponentFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${ContentColumnComponentFieldsFragmentDoc}
${ContentImageGridComponentFieldsFragmentDoc}
${ContentBodyTextFieldsFragmentDoc}
${ContentServiceListFieldsFragmentDoc}
${ContentVideoComponentFieldsFragmentDoc}
${HeaderComponentFieldsFragmentDoc}`;

export const useWorkQuery = <
      TData = WorkQuery,
      TError = unknown
    >(
      variables: WorkQueryVariables,
      options?: Omit<UseQueryOptions<WorkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<WorkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<WorkQuery, TError, TData>(
      {
    queryKey: ['work', variables],
    queryFn: customFetcher<WorkQuery, WorkQueryVariables>(WorkDocument, variables),
    ...options
  }
    )};

useWorkQuery.getKey = (variables: WorkQueryVariables) => ['work', variables];


useWorkQuery.fetcher = (variables: WorkQueryVariables, options?: RequestInit['headers']) => customFetcher<WorkQuery, WorkQueryVariables>(WorkDocument, variables, options);
