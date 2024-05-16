import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import * as Navigation from '../../navigation/navigation.stories';
import * as Footer from '../../footer/footer.stories';
import * as Slider from '../../slider/slider.stories';
import * as Quotes from '../../quotes/quotes.stories';
import * as ContentColumn from '../../content/content-column/content-column.stories';

import * as ContentList from '../../content/content-list/content-list.stories';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Pages/Test',
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Main = {
  args: {
    navigation: Navigation.Primary.args,
    slider: Slider.Home.args,
    contentColumn: ContentColumn.Intro.args,
    quotes: Quotes.Primary.args,
    footer: Footer.Primary.args,
    contentList: ContentList.Primary.args,
  },
};
