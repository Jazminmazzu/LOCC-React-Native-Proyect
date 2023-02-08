import React from 'react';
import {Alert, Pressable, Text} from 'react-native';
import TinyImage from '../TinyImage';
import theme from '../../theme';
import {CoinData} from '../../types';
import {
  CryptoContainer,
  NameView,
  CryptoName,
  Bold,
  StatsView,
  Change,
  ChangePercentage,
  Arrow,
} from './styles';
import {deleteCrypto} from '../../store/actions';
import {IRootState} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import callMade from '../../assets/call_made_green_24dp.png';
import callRecieved from '../../assets/call_received_red_24dp.png';

const Cryptoview = ({coin}: {coin: CoinData}): JSX.Element => {
  const dispatch = useAppDispatch();
  const Cryptos: CoinData = useAppSelector(
    ({addedCryptos})=> addedCryptos.addedCryptos,
    (state: IRootState)=> state.addedCryptos.addedCryptos,
  );
  const deleteCoin = () => {
    Alert.alert(
      'Deleting currency',
      `Are you sure you want to delete ${coin.Asset.name}?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: ()=> dispatch(deleteCrypto(coin.Asset.id, Cryptos)),
        },
      ],
    );
  };

  return (
    <Pressable onPress={deleteCoin}>
      <CryptoContainer>
        <NameView>
          <TinyImage
            imgUrl={`https://messari.io/asset-images/${coin.Asset.id}/128.png`}
          />
          <CryptoName>
            <Bold> {coin.Asset.name} </Bold>
            <Text> {coin.Asset.symbol} </Text>
          </CryptoName>
        </NameView>
        <StatsView>
          <Bold> ${coin.market_data.price_usd.toFixed(2)} </Bold>
          <Change>
            <Arrow
              source={
                coin.market_data.percent_change_usd_last_24_hours > 0
                  ? callMade
                  : callRecieved
              }
            />
            <ChangePercentage
              inputColor={
                coin.market_data.percent_change_usd_last_24_hours > 0
                  ? theme.colors.green
                  : theme.colors.red
              }>
              {coin.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
            </ChangePercentage>
          </Change>
        </StatsView>
      </CryptoContainer>
    </Pressable>
  );
};

export default Cryptoview;
