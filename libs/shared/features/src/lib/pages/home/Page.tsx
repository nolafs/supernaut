/* eslint-disable-next-line */
import { Navigation, Footer, Slider, Quotes } from '@supernaut/features';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Section } from '@supernaut/shared-ui';
import ContentColumn from '../../content/content-column/content-column';
import ContentList from '../../content/content-list/content-list';

export interface PageHomeProps {
  navigation: any;
  footer: any;
  slider: any;
  quotes: any;
  contentColumn: any;
  contentColumnImages: any;
  contentList: any;
}

export function Page({
  navigation,
  footer,
  slider,
  quotes,
  contentColumn,
  contentColumnImages,
  contentList
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
      <Slider
        slidesCollection={{items:slider?.slides}}
        strapline={slider?.strapline}
        autoplay={slider.autoplay}
      />
      <Section
        internalName={'intro'}
        marginTop={true}
        marginBottom={false}
        mode={'dark'}
      >
        <ContentColumn
          title={contentColumn.title}
          body={contentColumn.body}
          label={contentColumn.label}
          url={contentColumn.url}
        />

      </Section>

        <Section
          internalName={'services'}
          marginTop={true}
          paddingTop={true}
          marginSize={'lg'}
          marginBottom={false}
          mode={'dark'}
        >
          <ContentList title={contentList.title} items={contentList.items} />
        </Section>

        <Section
          internalName={'partners'}
          marginTop={true}
          marginBottom={true}
          mode={'dark'}
        >
        test
      </Section>

      <Quotes
        mode={quotes?.mode}
        quotesCollection={{items:quotes?.items}}
        internalName={'quotes'}
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
