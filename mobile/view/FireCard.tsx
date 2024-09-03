import { FireItem } from '@/domain/FireItem';
import { Image, View } from 'react-native';
import { RenderCardProps } from 'react-native-swipeable-card-stack';

export const FireCard = ({ data }: RenderCardProps<FireItem>) => (
  <View style={{ width: '100%', height: '100%' }}>
    <Image
      source={{ uri: data.url }}
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
    />
  </View>
);
