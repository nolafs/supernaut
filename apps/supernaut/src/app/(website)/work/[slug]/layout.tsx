import {ReactNode} from 'react';
import {Metadata, ResolvingMetadata} from 'next';
import {Work} from '../../../../data/work';


interface LayoutProps {
  children: ReactNode;
  latest: ReactNode;
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const work = await Work(params.slug, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

  console.log('WORK SLUG', params, searchParams)

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: work?.seo?.title || work?.title || (await parent).title,
    description: work?.seo?.description || work?.subtitle || (await parent).description,
    openGraph: {
      images: [work?.seo?.image ? `${work?.seo?.image.url}?fit=crop&w=1200&h=630&fm=webp&q=60` : `${work?.featureImage?.url}?fit=crop&w=1200&h=630&fm=webp&q=60`
        , ...previousImages],
    },
    robots: {
      index: work?.seo?.noIndex === true ? false : true,
      follow: work?.seo?.noFollow === true ? false : true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true
      },
    },
  }
}


export default async function Layout({children, latest}: LayoutProps) {
  return (
      <>
      {children}
      {latest}
      </>
  );
}
