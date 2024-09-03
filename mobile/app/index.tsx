import { fires } from '@/domain/fires';
import { FireCard } from '@/view/FireCard';
import { Text, View } from 'react-native';
import { SwipeableCardStack } from 'react-native-swipeable-card-stack';

export default function HomeScreen() {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#cdaaf1',
        }}
      >
        <Text style={{ fontSize: 22 }}>🔥🔥🔥</Text>
      </View>
      <SwipeableCardStack
        data={fires}
        renderCard={FireCard}
        lockedDirections={['bottom', 'top']}
      />
    </>
  );
}
