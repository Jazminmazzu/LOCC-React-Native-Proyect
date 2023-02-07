import {Platform} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  padding-vertical: 18px;
  background-color: ${theme.colors.blue};
  padding-horizontal: 3px;
  margin-bottom: 10px;
  margin-right: -45px;
  margin-top: ${Platform.OS === 'android' ? '10px' : '-20px'};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderText = styled.Text`
  color: ${theme.colors.white};
  font-size: 22px;
  font-weight: bold;
  margin-left: ${Platform.OS === 'android' ? '-15px' : '5px'};
  align-self: center;
`;
