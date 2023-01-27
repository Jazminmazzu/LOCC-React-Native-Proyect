export default interface CryptoType {
    id: string;
    name: string;
    symbol: string;
    metrics: Metrics;
}
interface Metrics {
    market_data: Market_Data;
}
interface Market_Data {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
}