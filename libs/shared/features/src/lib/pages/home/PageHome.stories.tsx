import type { Meta, StoryObj } from '@storybook/react';
import { PageHome } from './PageHome';
import * as Navigation from '../../navigation/navigation.stories';
import * as Footer from '../../footer/footer.stories';
import * as Slider from '../../slider/slider.stories';
import * as Quotes from '../../quotes/quotes.stories';
import * as ContentColumn from '../../content/content-column/content-column.stories';
import * as ContentColumnImages from '../../content/content-column-images/content-column-images.stories';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PageHome> = {
  component: PageHome,
  title: 'Pages/Test',
};
export default meta;
type Story = StoryObj<typeof PageHome>;

export const Main = {
  args: {
    navigation: Navigation.Primary.args,
    slider: Slider.Home.args,
    contentColumn: ContentColumn.Intro.args,
    contentColumnImages: ContentColumnImages.Primary.args,
    quotes: Quotes.Primary.args,
    footer: Footer.Primary.args,
  },
};
