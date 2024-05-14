/* eslint-disable-next-line */
import {Navigation, Footer, ContentProfileList, ContentVideo, ContentImages} from '@supernaut/features';
import {Header, Section} from '@supernaut/shared-ui';
import ContentColumn from '../../content/content-column/content-column';
import ContentList from '../../content/content-list/content-list';

export interface PageHomeProps {
  navigation: any;
  footer: any;
  services: any;
  profile: any;
}

export function Page({
  navigation,
  profile,
  services,
  footer,
}: PageHomeProps) {
  return (
    <div className={'flex flex-col'}>
      <Navigation
        items={navigation?.items}
        mode={navigation.mode}
        logo={navigation.logo}
        siteTitle={navigation.siteTitle}
        social={navigation?.social}
      />

      <Header
        columnLayout
        description="<ul><li>Brand Identity</li><li>Web Design</li><li>Illustration</li></ul>"
        mode="dark"
        pageName="Neonhive"
        subtitle="Creating a personal brand identity for the marketing leaders in the indie games scene."
        title="Neonhive"
      />

      <Section
        internalName={'video'}
        marginTop={true}
        marginBottom={false}
        mode={'dark'}
      >
        <ContentVideo id={'first'} type={'video'} src={'fdwwgzb980yiwtitocgk'} title={'first'} />
      </Section>

      <Section
        internalName={'images_1'}
        marginTop={false}
        paddingTop={false}
        marginBottom={false}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/940x626'
            },
            {
              alt: 'Image 2',
              id: '2',
              image: 'https://via.placeholder.com/640x226'
            }
          ]}
        />
      </Section>

      <Section
        internalName={'text_1'}
        marginTop={true}
        marginBottom={true}
        mode={'dark'}
      >
        <ContentColumn
          align="right"
          body="<p>Supernaut is a creative studio that designs and builds digital products for brands and startups.</p>"
          mode="dark"
          type="text"
        />
      </Section>


      <Section
        internalName={'images_2'}
        marginTop={false}
        paddingTop={false}
        paddingBottom={false}
        marginBottom={true}
        marginSize={'md'}
        backgroundColor={'#f97a7a'}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/1840x1040'
            },
          ]}
        />
      </Section>

      <Section
        internalName={'images_2'}
        marginTop={false}
        paddingTop={false}
        marginBottom={false}
        backgroundColor={'#f9e57a'}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/1840x1040'
            },
          ]}
        />
      </Section>

      <Section
        internalName={'text_2'}
        marginTop={true}
        marginBottom={true}

        mode={'dark'}
      >
        <ContentColumn
          align="left"
          body="<p>Supernaut is a creative studio that designs and builds digital products for brands and startups.</p>"
          mode="dark"
          type="text"
        />
      </Section>


      <Section
        internalName={'images_3'}
        marginTop={false}
        paddingTop={false}
        marginBottom={false}
        backgroundColor={'#eb97fa'}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/1840x1200'
            },
          ]}
        />
      </Section>

      <Section
        internalName={'images_4'}
        marginTop={false}
        paddingTop={false}
        marginBottom={false}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/940x626'
            },
            {
              alt: 'Image 2',
              id: '2',
              image: 'https://via.placeholder.com/640x226'
            }
          ]}
        />
      </Section>

      <Section
        internalName={'images_5'}
        marginTop={false}
        paddingTop={false}
        marginBottom={true}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/1940x600'
            },
          ]}
        />
      </Section>

      <Section
        internalName={'images_6'}
        marginTop={false}
        paddingTop={false}
        marginBottom={true}
        mode={'dark'}
      >
        <ContentImages
          items={[
            {
              alt: 'Image 1',
              id: '1',
              image: 'https://via.placeholder.com/1940x1200'
            },
          ]}
        />
      </Section>


      <Footer
        copyright={footer?.copyright}
        strapline={footer?.strapline}
        contactButtonLabel={footer?.contactButtonLabel}
        social={footer.social}
        legal={footer?.legal}
      />
    </div>
  );
}

export default Page;
