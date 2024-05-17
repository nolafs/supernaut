'use client'
import {useInfiniteQuery} from '@tanstack/react-query'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.Card), {ssr: false});

/* eslint-disable-next-line */
export interface PaginationListProps {
  queryFn: () => void;
  queryKey: string[];
}

export function PaginationList({queryFn, queryKey}: PaginationListProps) {

  const {ref, inView} = useInView();

  const {
    data: dataList,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: queryFn,
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
