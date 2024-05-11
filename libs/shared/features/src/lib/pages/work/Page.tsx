/* eslint-disable-next-line */
import {Navigation, Footer, ContentProfileList, ContentVideo} from '@supernaut/features';
import {Header, Section} from '@supernaut/shared-ui';
import ContentList from '../../content/content-list/content-list';
import ContentColumn from '../../content/content-column/content-column';

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
        marginBottom={true}
        mode={'dark'}
      >
        <ContentVideo id={'first'} type={'youtube'} src={'https://www.youtube.com/watch?v=M7jgxJ_4TJs'} title={'first'} />
      </Section>

      <Section
        internalName={'video'}
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
