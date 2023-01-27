import React from 'react';
import CryptoType from '../../types/types';
import {
  Container,
  LogoContainer,
  CryptoLogo,
  TextContainer,
  TextCoin,
  TextSymbol,
  LeftContainer,
  RightContainer,
  ChangeContainer,
  Arrow,
  TextPercent,
  TextPercentage,
  Line,
} from '../list/styles';
import GreenArrow from '../../assets/img/GreenArrow.png';
import RedArrow from '../../assets/img/RedArrow.png';
import { Text } from 'react-native';
interface Props {
  item: CryptoType;
}
const List = ({item}: Props) => (
  <>
    <Container>
      <LeftContainer>
        <LogoContainer>
          <CryptoLogo source={{uri: `https://messari.io/asset-images/${item.id}/128.png`}} />
        </LogoContainer>
        <TextContainer>
          <TextCoin>{item.name}</TextCoin>
          <TextSymbol>{item.symbol}</TextSymbol>
        </TextContainer>
      </LeftContainer>
      <RightContainer>
        <ChangeContainer>
          <TextCoin>${item.metrics.market_data.price_usd.toFixed(2)}</TextCoin>
          <TextPercent>
            <Arrow source={item.metrics.market_data.percent_change_usd_last_24_hours > 0 ? GreenArrow : RedArrow} />
            <TextPercentage>
              {item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
            </TextPercentage>
          </TextPercent>
        </ChangeContainer>
      </RightContainer>
    </Container>
    <Line />
  </>
);

export default List;
