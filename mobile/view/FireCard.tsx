import { FireItem } from '@/domain/FireItem';
import { Image, View } from 'react-native';

type Props = {
  fireItem: FireItem;
};

export const FireCard = ({ fireItem }: Props) => (
  <View style={{ width: '100%', height: '100%' }}>
    <Image
      source={{ uri: fireItem.url }}
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
    />
  </View>
);
