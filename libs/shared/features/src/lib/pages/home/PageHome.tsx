/* eslint-disable-next-line */
import { Navigation, Footer, Slider, Quotes } from '@supernaut/features';
import { Section } from '@supernaut/shared-ui';
import ContentColumn from '../../content/content-column/content-column';
import ContentColumnImages from '../../content/content-column-images/content-column-images';

export interface PageHomeProps {
  navigation: any;
  footer: any;
  slider: any;
  quotes: any;
  contentColumn: any;
  contentColumnImages: any;
}

export function PageHome({
  navigation,
  footer,
  slider,
  quotes,
  contentColumn,
  contentColumnImages
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
        slides={slider?.slides}
        strapline={slider?.strapline}
        autoplay={slider.autoplay}
      />
      <Section
        internalName={'intro'}
        marginTop={true}
        marginBottom={true}
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
          internalName={'partners'}
          marginTop={true}
          marginBottom={true}

          mode={'dark'}
        >
        <ContentColumnImages title={contentColumnImages.title} items={contentColumnImages.items}  />
      </Section>

      <Quotes
        mode={quotes?.mode}
        items={quotes?.items}
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

export default PageHome;
