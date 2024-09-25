import { Path } from 'react-native-svg';
import { Icon, IconProps } from './Icon';

export const ImageIcon = (props: IconProps) => (
  <Icon {...props}>
    <Path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Z" />
  </Icon>
);
