import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import * as Navigation from '../../navigation/navigation.stories';
import * as Footer from '../../footer/footer.stories';
import * as ContentProfileList from '../../content/content-profile-list/content-profile-list.stories';
import * as ContentList from '../../content/content-list/content-list.stories';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Pages/test',
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Contact = {
  args: {
    navigation: Navigation.Primary.args,
    profile: ContentProfileList.Primary.args,
    services: ContentList.Primary.args,
    footer: Footer.Primary.args,
  },
};
