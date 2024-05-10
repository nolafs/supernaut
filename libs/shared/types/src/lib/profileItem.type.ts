import {TSocialLinkItemType} from './TSocialLinkItemType';

export type TProfileItem = {
  id: string | number;
  name: string;
  title: string;
  description: string;
  image: string;
  socials: TSocialLinkItemType[];
}
