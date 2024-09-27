import { useImages } from '@/src/api/images.queries';
import { FireCard } from '@/src/view/FireCard';
import { useInterceptSwipeUpdate } from '@/src/view/useInterceptSwipeUpdate';
import { useCallback, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SwipeableCardStack,
  SwipeableCardStackRef,
  SwipeDirection,
} from 'react-native-swipeable-card-stack';

export default function HomeScreen() {
  const { images } = useImages();
  const ref = useRef<SwipeableCardStackRef>(null);

  const onButtonPressed = useCallback(
    (direction: SwipeDirection) => {
      ref.current?.swipe(direction);
    },
    [ref],
  );

  const { interceptSwipeUpdate } = useInterceptSwipeUpdate();

  if (!images) return null;

  return (
    <>
      <View style={styles.endOfStack}>
        <Text style={{ fontSize: 22 }}>🔥🔥🔥</Text>
      </View>
      <SwipeableCardStack
        data={images}
        renderCard={(props) => (
          <FireCard {...props} onButtonPressed={onButtonPressed} />
        )}
        lockedDirections={['top']}
        ref={ref}
        onActiveCardUpdate={interceptSwipeUpdate}
      />
    </>
  );
}

const styles = StyleSheet.create({
  endOfStack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cdaaf1',
  },
});
