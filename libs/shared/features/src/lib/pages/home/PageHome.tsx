/* eslint-disable-next-line */
import {Navigation, Footer, Slider, Quotes} from '@supernaut/features';


export interface PageHomeProps {
  navigation: any;
  footer: any;
  slider: any;
  quotes: any;
}

export function PageHome({navigation, footer, slider, quotes}: PageHomeProps) {
  return (
    <div>
      <Navigation items={navigation?.items} mode={navigation.mode} logo={navigation.logo} siteTitle={navigation.siteTitle} social={navigation?.social} />
      <Slider slides={slider?.slides} strapline={slider?.strapline} autoplay={slider.autoplay} />
      <Quotes mode={quotes?.mode} items={quotes?.items} internalName={'quotes'} />
      <Footer mode={footer?.mode} copyright={footer?.copyright} strapline={footer?.strapline} contactButtonLabel={footer?.contactButtonLabel} social={footer.social} legal={footer?.legal} />
    </div>
  );
}

export default PageHome;
