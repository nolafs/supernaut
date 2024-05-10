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
        columnLayout
        description="<ul><li>Brand Identity</li><li>Web Design</li><li>Illustration</li></ul>"
        mode="dark"
        pageName="Neonhive"
        subtitle="Creating a personal brand identity for the marketing leaders in the indie games scene."
        title="Neonhive"
      />



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
