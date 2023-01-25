import React from 'react';
import {Crypto} from '../interfaces/index';
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
interface Props {
  item: Crypto;
}
const List = ({item}: Props) => (
  <>
    <Container>
      <LeftContainer>
        <LogoContainer>
          <CryptoLogo source={item.img} />
        </LogoContainer>
        <TextContainer>
          <TextCoin>{item.name}</TextCoin>
          <TextSymbol>{item.symbol}</TextSymbol>
        </TextContainer>
      </LeftContainer>
      <RightContainer>
        <ChangeContainer>
          <TextCoin>${item.price}</TextCoin>
          <TextPercent>
            <Arrow source={item.percent > 0 ? GreenArrow : RedArrow} />
            <TextPercentage positive={item.percent > 0}>
              {item.percent}%
            </TextPercentage>
          </TextPercent>
        </ChangeContainer>
      </RightContainer>
    </Container>
    <Line />
  </>
);

export default List;
