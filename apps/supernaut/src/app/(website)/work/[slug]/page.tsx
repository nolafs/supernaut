import process from 'process';
import { notFound } from 'next/navigation';
import {Header} from '@supernaut/shared-ui';
import {SectionResolver} from '@supernaut/features';
import {Work} from '../../../../data/work';
import {ServicesFieldsFragment} from '../../../../lib/__generated/sdk';
import cn from 'classnames';

export interface PageProps {
  params: { slug: string }
}

export default async function Page({params}: PageProps) {

  const workData = await Work(params.slug, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

    if (!workData) {
      return notFound();
    }

    const servicesList = (services: any) => {
      return `<ul>${services.map((service: ServicesFieldsFragment) => `<li>${service.name}</li>`).join('')}</ul>`;
    }

    return (<div className={cn(
        workData?.mode === 'dark' && 'text-white',
        workData?.mode === 'light' && 'text-black bg-white',
      )
      }>
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
            <SectionResolver pageMode={workData?.mode || 'dark' } sections={workData?.topSectionsCollection?.items}/>
          }
        </article>
      </div>
    );
}
