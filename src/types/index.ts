export type CoinData = {
  Asset: Asset;
  imgUrl: string;
  market_data: Market_data;
};

export type Asset = {
  name: string;
  symbol: string;
  id: string;
};

export type Market_data = {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
};

export type deleteCrypto = Function;
