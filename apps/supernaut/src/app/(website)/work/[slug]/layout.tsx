import {ReactNode} from 'react';
import {Work} from '../../../../data/work';
import {Metadata, ResolvingMetadata} from 'next';


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

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: work?.title || (await parent).title,
    description: work?.subtitle || (await parent).description,
    openGraph: {
      images: [`${work?.featureImage?.url}?fit=crop&w=1200&h=630&fm=webp&q=60`
        , ...previousImages],
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
