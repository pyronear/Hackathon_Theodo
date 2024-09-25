import { SwipeDirection } from '@/domain/SwipeDirection';
import { FireType } from '@/src/api/images.types';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RenderCardProps } from 'react-native-swipeable-card-stack';
import { VoteButton } from './VoteButton';
import { CloseIcon } from './icons/CloseIcon';
import { FireIcon } from './icons/FireIcon';
import { ImageIcon } from './icons/ImageIcon';
import { QuestionMarkIcon } from './icons/QuestionMarkIcon';

type Props = RenderCardProps<FireType> & {
  onButtonPressed: (direction: SwipeDirection) => void;
};

export const FireCard = ({ data, onButtonPressed }: Props) => (
  <View style={styles.container}>
    <Image
      source={{ uri: data.gif }}
      resizeMode="cover"
      style={styles.backgroundImage}
    />
    <SafeAreaView style={styles.headerComponent} edges={['top']}>
      <VoteButton
        Icon={ImageIcon}
        onPress={() => {
          console.log('🤡🤡🤡🤡🤡🤡🤡🤡');
        }}
      />
    </SafeAreaView>
    <SafeAreaView style={styles.foregroundComponent} edges={['bottom']}>
      <VoteButton
        Icon={CloseIcon}
        onPress={() => {
          onButtonPressed('left');
        }}
      />
      <VoteButton
        Icon={QuestionMarkIcon}
        onPress={() => {
          onButtonPressed('bottom');
        }}
      />
      <VoteButton
        Icon={FireIcon}
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
  headerComponent: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 16,
    right: 16,
  },
});
