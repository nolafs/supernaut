'use client';

/* eslint-disable-next-line */
import {ReactNode} from 'react';
import {ContentfulLivePreviewProvider} from '@contentful/live-preview/react';

export interface ContentFulProviderProps {
  children: ReactNode;
}

export function ContentFullProvider({children}: ContentFulProviderProps) {
  return (
    <ContentfulLivePreviewProvider locale="en-US">
      {children}
    </ContentfulLivePreviewProvider>
  );
}

export default ContentFullProvider;
