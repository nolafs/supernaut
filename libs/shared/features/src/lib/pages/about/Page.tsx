/* eslint-disable-next-line */
import { Navigation, Footer, ContentProfileList} from '@supernaut/features';
import {Header, Section} from '@supernaut/shared-ui';
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
      pageName={'About'}
      marginBottom={true}
      title={'We\'ve built brands that are beloved by communities all over the world.'}
     ></Header>



      <Section
        internalName={'who'}
        marginTop={false}
        marginBottom={true}
        mode={'dark'}
      >
        <ContentProfileList itemsCollection={profile} mode={'dark'} />

      </Section>

      <Section
        internalName={'services'}
        marginTop={true}
        marginBottom={false}
        mode={'dark'}
      >
        <ContentList title={services.title} items={services.items}/>
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
