import process from 'process';
import { notFound } from 'next/navigation';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Header} from '@supernaut/shared-ui';
import {SectionResolver, ThemeSwitchServer} from '@supernaut/features';
import {Work} from '../../../../data/work';
import {ServicesFieldsFragment} from '../../../../lib/__generated/sdk';
import {TriggerResizeOnLoad} from '@supernaut/utils';



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

    return (<>
        <article>
          <Header
            columnLayout
            description={servicesList(workData?.servicesCollection?.items)}
            mode="dark"
            client={workData?.client}
            pageName={workData?.title}
            subtitle={workData?.subtitle}
            title={workData?.title}
            delay={0}
          />
          {workData?.topSectionsCollection?.items &&
            <SectionResolver  sections={workData?.topSectionsCollection?.items}/>
          }
        </article>
        <ThemeSwitchServer mode={workData?.mode} />
      </>
    );
}
