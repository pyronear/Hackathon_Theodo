import { fires } from '@/domain/fires';
import { FireCard } from '@/view/FireCard';
import { useCallback, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SwipeableCardStack,
  SwipeableCardStackRef,
  SwipeDirection,
} from 'react-native-swipeable-card-stack';

export default function HomeScreen() {
  const ref = useRef<SwipeableCardStackRef>(null);

  const onButtonPressed = useCallback(
    (direction: SwipeDirection) => {
      ref.current?.swipe(direction);
    },
    [ref],
  );

  return (
    <>
      <View style={styles.endOfStack}>
        <Text style={{ fontSize: 22 }}>🔥🔥🔥</Text>
      </View>
      <SwipeableCardStack
        data={fires}
        renderCard={(props) => (
          <FireCard {...props} onButtonPressed={onButtonPressed} />
        )}
        lockedDirections={['bottom']}
        ref={ref}
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
