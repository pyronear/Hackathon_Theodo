import { Path } from 'react-native-svg';
import { Icon, IconProps } from './Icon';

export const CloseIcon = (props: IconProps) => (
  <Icon {...props}>
    <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </Icon>
);
