'use client'
import {useInfiniteQuery} from '@tanstack/react-query'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import dynamic from 'next/dynamic';
import {WorkCollection, WorkFeaturedCollection} from '../../../../../../data/work';
import {WorkFieldsFragment} from '../../../../../../lib/__generated/sdk';


const Card = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.Card), {ssr: false});

async function getWork({pageParam}: { pageParam: number }) {

  const data = await WorkCollection(0, pageParam, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');
  const featuredData = await WorkFeaturedCollection(1, 0, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');
  let dataList: Array<({ __typename?: "Work" } & WorkFieldsFragment) | null> | undefined = [];


  if (featuredData?.workCollection?.items && data?.workCollection?.items) {
    const featuredWork = featuredData?.workCollection?.items[0];
    dataList = data.workCollection.items.filter((item: any) => item.sys.id !== featuredWork?.sys.id);
  } else {
    if(data?.workCollection?.items.length) {
      dataList = data.workCollection?.items;
    }
  }


  if (!dataList?.length) {
    throw new Error('Failed to fetch data');
  }

  return dataList;

}

export function PaginationList() {

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
        lastPage?.length === 5 ? allPages.length * 5 : undefined;
      return nextPage;
    },
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16 mb:mt-20 mb-10 md:mb-20'}>
      {dataList?.pages.map(page =>
        page.map((dataList: any, index: number) => {
          if (page.length == index + 1) {
          return (
              <Card key={index}
                          title={dataList?.title}
                          categories={dataList?.serviceCategoryCollection?.items}
                          image={dataList?.featureImage?.url}
                          url={dataList?.slug}
                          prefix={'work'}
                          innerRef={ref}
                          wide={false}/>)

          } else {
             return (<Card key={index}
                  title={dataList?.title}
                   categories={dataList?.serviceCategoryCollection?.items}
                  image={dataList?.featureImage?.url}
                  url={dataList?.slug}
                  prefix={'work'}
                  wide={false}/>
            )
          }
          }
        ))}
    </div>
  );
}

export default PaginationList;
