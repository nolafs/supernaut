'use client'
import PaginationList from './_component/pagination-list';
import {QueryProvider} from '@supernaut/contentful';
import {BlockAnimateOnScroll} from '@supernaut/context';

export function Page() {

  return (<div className={'wrapper mt-10'}>
    <QueryProvider>
      <BlockAnimateOnScroll animation="slideIn" duration={1} start="top 90%">
        <PaginationList  />
      </BlockAnimateOnScroll>
    </QueryProvider>
    </div>
  );
}

export default Page;
