import dynamic from 'next/dynamic';

export const componentMap = {
  QuoteComponent: dynamic(() =>
    import('../../quotes/quotes').then(module => module.Quotes),
  ),
  Slider: dynamic(() =>
    import('../../slider/slider').then(module => module.Slider),
  ),
  HeaderComponent: dynamic(() =>
    import('@supernaut/shared-ui').then(module => module.Header),
  ),
  ContentProfileComponent: dynamic(() =>
    import('../../content/content-profile-list/content-profile-list').then(module => module.ContentProfileList),
  ),
  ContentColumnComponent: dynamic(() =>
    import('../../content/content-column/content-column').then(module => module.ContentColumn),
  ),
  ContentServiceList: dynamic(() =>
    import('../../services/services').then(module => module.Services),
  ),
};
