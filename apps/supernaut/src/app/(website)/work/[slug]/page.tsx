import process from 'process';
import { notFound } from 'next/navigation';
import {Header} from '@supernaut/shared-ui';
import {SectionResolver} from '@supernaut/features';
import {Work} from '../../../../data/work';
import {ServicesCollection, ServicesFieldsFragment} from '../../../../lib/__generated/sdk';

export interface PageProps {
  params: { slug: string }
}

export default async function Page({params}: PageProps) {

  console.log('searchParams', params.slug);

  const workData = await Work(params.slug, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

    if (!workData) {
      return notFound();
    }

    console.log('workData', workData)

    // create a ul li from array of items
    const servicesList = (services: any) => {
      return `<ul>${services.map((service: ServicesFieldsFragment) => `<li>${service.name}</li>`).join('')}</ul>`;
    }



    return (
        <article>
          <Header
            columnLayout
            description={servicesList(workData?.servicesCollection?.items)}
            mode="dark"
            pageName={workData?.title}
            subtitle={workData?.subtitle}
            title={workData?.title}
          />
          {workData?.topSectionsCollection?.items &&
            <SectionResolver sections={workData?.topSectionsCollection?.items}/>
          }
        </article>
    );
}
