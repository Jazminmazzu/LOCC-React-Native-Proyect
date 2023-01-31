import React, { useEffect, useState } from 'react';
import {TouchableOpacity, FlatList, View} from 'react-native';
import {Crypto} from '../../components/interfaces/index';
import List from '../../components/list/index';
import {
  Container,
  CustomText,
  TopBar,
  ProfilePhoto,
  TextTouchable,
} from './styles';
import avatar from '../../assets/img/avatar.png';

function CryptocurrenciesList() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(
          'https://data.messari.io/api/v2/assets',
        );
        const ResJson = await resp.json();
        setCryptos(ResJson.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }:  { item: Crypto; }) => <List item={item} />;

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
