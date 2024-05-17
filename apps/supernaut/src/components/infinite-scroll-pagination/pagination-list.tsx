'use client'
import {useInfiniteQuery} from '@tanstack/react-query'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import dynamic from 'next/dynamic';
import {client, previewClient} from '../../lib/client';

const Card = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.Card), {ssr: false});

async function getWork({pageParam}: { pageParam: number }) {

  const gqlClient = process.env.NEXT_PUBLIC_PREVIEW === 'true' ? previewClient : client;

  const data = await gqlClient.workCollection({
    skip: pageParam,
    limit: 5,
    preview: process.env.NEXT_PUBLIC_PREVIEW === 'true',
    locale: 'en-US'

  });

  if (!data?.workCollection?.items.length) {
    throw new Error('Failed to fetch data');
  }

  return data.workCollection.items;

}


/* eslint-disable-next-line */
export interface PaginationListProps {
}

export function PaginationList({}: PaginationListProps) {

  const {ref, inView} = useInView();

  const {
    data: dataList,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['work'],
    queryFn: getWork,
    initialPageParam: 0,
    getNextPageParam: (lastPage: any, allPages) => {
      const nextPage =
        lastPage?.length === 20 ? allPages.length * 20 : undefined;
      return nextPage;
    },
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16 mb:mt-20'}>
      {dataList?.pages.map(page =>
        page.map((dataList: any, index: number) => {
            return (<Card key={index}
                          title={dataList?.title}
                          image={dataList?.featureImage?.url}
                          url={dataList?.slug}
                          prefix={'work'}
                          wide={false}/>)

          }
        ))}
    </div>
  );
}

export default PaginationList;
