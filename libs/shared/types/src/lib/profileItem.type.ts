import {TSocialLinkItemType} from './TSocialLinkItemType';

export type TProfileItem = {
  id: string | number;
  sys: {
    id: string;
  },
  name: string;
  title: string;
  description: {
    json: any;
  };
  image: {
    url: string;
  };
  socialCollection: {
    items: TSocialLinkItemType[]
  };
}
