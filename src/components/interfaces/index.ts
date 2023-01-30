import { ImageSourcePropType } from 'react-native';

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percent: number;
  img: ImageSourcePropType;
  positive: Boolean;
  item: any;
  metrics: any;
}

export type StyleTypes = {
  positive?: boolean;
};

