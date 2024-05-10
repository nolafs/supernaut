import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import * as Navigation from '../../navigation/navigation.stories';
import * as Footer from '../../footer/footer.stories';
import * as ContentProfileList from '../../content/content-profile-list/content-profile-list.stories';
import * as ContentList from '../../content/content-list/content-list.stories';



const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Pages/Test',
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Work = {
  args: {
    navigation: Navigation.Primary.args,
    profile: ContentProfileList.Primary.args,
    services: ContentList.Primary.args,
    footer: Footer.Primary.args,
  },
};
