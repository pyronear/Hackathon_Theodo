import { FireItem } from '@/domain/FireItem';
import { SwipeDirection } from '@/domain/SwipeDirection';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RenderCardProps } from 'react-native-swipeable-card-stack';
import { VoteButton } from './VoteButton';
import { ThumbDownIcon } from './icons/ThumbDownIcon';
import { ThumbUpIcon } from './icons/ThumbUpIcon';

type Props = RenderCardProps<FireItem> & {
  onButtonPressed: (direction: SwipeDirection) => void;
};

export const FireCard = ({ data, onButtonPressed }: Props) => (
  <View style={styles.container}>
    <Image
      source={{ uri: data.url }}
      resizeMode="cover"
      style={styles.backgroundImage}
    />
    <SafeAreaView style={styles.foregroundComponent} edges={['bottom']}>
      <VoteButton
        Icon={ThumbDownIcon}
        onPress={() => {
          onButtonPressed('left');
        }}
      />
      <VoteButton
        Icon={ThumbUpIcon}
        onPress={() => {
          onButtonPressed('right');
        }}
      />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  foregroundComponent: {
    position: 'absolute',
    bottom: 0,
    width: '50%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
