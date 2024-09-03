import { type ReactElement, type ReactNode } from 'react';
import { Svg } from 'react-native-svg';

export type IconProps = {
  size: number;
  color: string;
};

type Props = IconProps & { children: ReactNode };

export type IconType = (props: IconProps) => ReactElement;

export const Icon = ({ size, color, children }: Props) => (
  <Svg width={size} height={size} fill={color} viewBox={'0 -960 960 960'}>
    {children}
  </Svg>
);
