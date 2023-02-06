import React from 'react';
import theme from '../../theme';
import {Title, Touchable} from './styles';

const Button = ({
  text,
  onClick,
  type,
  disabled,
}: {
  text: string;
  onClick: Function;
  type: 'regular' | 'navigation';
  disabled?: boolean;
}): JSX.Element =>
  type === 'navigation' ? (
    <Touchable onPress={onClick}>
      <Title> {text} </Title>
    </Touchable>
  )
