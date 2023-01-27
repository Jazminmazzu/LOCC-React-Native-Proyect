import React, { useEffect, useState } from 'react';
import {TouchableOpacity, FlatList, View} from 'react-native';
import {Crypto} from '../interfaces/index';
import List from './list';
import {
  Container,
  CustomText,
  TopBar,
  ProfilePhoto,
  TextTouchable,
} from '../cryptoList/styles';
import avatar from '../../assets/img/avatar.png';
import CryptoType from '../../types/types';

function CryptocurrenciesList() {
        const [cryptos, setCryptos] = useState([]);
console.log("hola")
//  const cryptos: Crypto[] = [
//    {
//      id: '1',
//      name: 'Bitcoin',
//      symbol: 'BTC',
//      price: 7215.68,
//      percent: 1.82,
//      img: require('../../assets/img/bitcoin.png'),
//    },
//    {
//      id: '2',
//      name: 'Ethereum',
//      symbol: 'ETH',
//      price: 146.83,
//      percent: 1.46,
//      img: require('../../assets/img/ethereum.png'),
//    },
//    {
//      id: '3',
//      name: 'XRP',
//     symbol: 'XRP',
//      price: 0.220568,
//      percent: -2.47,
//      img: require('../../assets/img/xrp.png'),
//    },
//  ];

  useEffect(() => {
    const fetchData= async () => {
      try {
        const resp = await fetch(
          'https://data.messari.io/api/v1/assets',
        );
        const ResJson = await resp.json();
        return ResJson.data;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData().then((data)=>{
      console.log(data[0].metrics.market_data)
      setCryptos(data)
    })
  }, []);

  function renderItem({ item }: { item: CryptoType; }) {
    return <List item={item} />;
  }
  //function renderItem (item: CryptoType) {
  //  return (
  //    <>
  //    {item && <List item={item} />} 
  //    </>
  //  )
  //}

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
