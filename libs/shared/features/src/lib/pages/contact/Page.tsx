/* eslint-disable-next-line */
import {Navigation, Footer, ContentProfileList, ContactForm} from '@supernaut/features';
import {Header, Section} from '@supernaut/shared-ui';
import ContentList from '../../content/content-list/content-list';
import ContentColumn from '../../content/content-column/content-column';

export interface PageHomeProps {
  navigation: any;
  footer: any;
}

export function Page({
  navigation,
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

      <Section
        internalName={'contact'}
        marginTop={true}
        paddingTop={true}
        paddingBottom={true}
        marginBottom={true}
        mode={'dark'}
        className={'mt-[130px] lg:mt-[220px]'}

      >
        <ContentColumn type={'3/9'} title={'Contact'} hTag={'h1'} align={'left'}>
          <ContactForm />
        </ContentColumn>

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
