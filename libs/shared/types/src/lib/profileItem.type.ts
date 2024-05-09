import {SocialLinkItemType} from './socialLinkItem.type';

export type ProfileItem = {
  id: string | number;
  name: string;
  title: string;
  description: string;
  image: string;
  socials: SocialLinkItemType[];
}
