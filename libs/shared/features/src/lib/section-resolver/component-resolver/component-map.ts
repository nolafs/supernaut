import dynamic from 'next/dynamic';

export const componentMap = {
  Quote: dynamic(() =>
    import('../../quotes/quotes').then(module => module.Quotes),
  ),
  Slider: dynamic(() =>
    import('../../slider/slider').then(module => module.Slider),
  )
};
