import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 300;
  height: 60;
  border-radius: ${theme.radius.normal};
  background-color: ${(props) =>
    props.primary ? theme.color.accent : theme.color.transparent};
  margin-bottom: ${(props) => (props.primary ? theme.space.m : theme.space.xs)};
`;
