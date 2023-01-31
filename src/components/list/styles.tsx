import styled from 'styled-components';
import theme from '../../config/utils/theme';
import { Text, TextProps, View, Image } from 'react-native';
import { StyleTypes } from '../interfaces';

export const Container = styled(View)`
  flex: 1;
  padding-horizontal: 12px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled(View)`
  justify-content: flex-start;
  display: flex;
  flex-flow: wrap;
`;

export const LogoContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 7.5%;
  padding-left: 7.5%;
`;

export const TextContainer = styled(View)`
  display: flex;
  justify-content: center;
  text-align: left;
`;

export const TextCoin = styled(Text)`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.black};
`;

export const TextSymbol = styled(Text)`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.grey};
`;

export const RightContainer = styled(View)`
  justify-content: flex-end;
  display: flex;
  flex-flow: wrap;
`;

export const ChangeContainer = styled(View)`
  padding-horizontal: 25px;
  justify-content: flex-end;
  display: flex;
  align-items: space-between;
  padding-vertical: 24px;
  padding-horizontal: 20px;
`;

export const TextPercent = styled(Text)`
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
`;

interface TextPercentage extends TextProps {
  positive: Boolean;
  children: any;
}

export const TextPercentage = styled(Text)<StyleTypes>`
  color: ${((props) => props.positive ? theme.colors.green : theme.colors.red)};
`;

export const Line = styled(Text)`
  background-color: ${theme.colors.lineGrey};
  height: 2px;
  width: 87%;
  margin-vertical: 10px;
  margin-horizontal: 24px;
`;

export const CryptoLogo = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const Arrow = styled(Image)`
  width: 13px;
  height: 13px;
`;
