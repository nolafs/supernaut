'use client'
import PaginationList from './_component/pagination-list';
import {QueryProvider} from '@supernaut/contentful';

export function Page() {

  return (<div className={'wrapper mt-10'}>
    <QueryProvider>
      <PaginationList  />
    </QueryProvider>
    </div>
  );
}

export default Page;
