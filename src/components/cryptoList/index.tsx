import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {Crypto} from '../interfaces/index';
import List from '../list/index';
import {
  Container,
  CustomText,
  TopBar,
  ProfilePhoto,
  TextTouchable,
} from '../cryptoList/styles';
import avatar from '../../assets/img/avatar.png';

function CryptocurrenciesList() {
  const cryptos: Crypto[] = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 7215.68,
      percent: 1.82,
      img: require('../../assets/img/bitcoin.png'),
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 146.83,
      percent: 1.46,
      img: require('../../assets/img/ethereum.png'),
    },
    {
      id: '3',
      name: 'XRP',
      symbol: 'XRP',
      price: 0.220568,
      percent: -2.47,
      img: require('../../assets/img/xrp.png'),
    },
  ];

  const renderItem = ({ item }: { item: Crypto; }) => <List item={item} />;

  return (
    <>
      <TopBar>
        <CustomText>CryptoTracker Pro</CustomText>
        <ProfilePhoto source={avatar} />
      </TopBar>
      <FlatList
        data={cryptos}
        renderItem={renderItem}
        keyExtractor={({ id }) => id} />
      <Container>
        <TouchableOpacity>
          <TextTouchable>+ Add a Cryptocurrency</TextTouchable>
        </TouchableOpacity>
      </Container>
    </>
  );
}

export default CryptocurrenciesList;
