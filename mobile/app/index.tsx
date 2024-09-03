import { fires } from '@/domain/fires';
import { FireCard } from '@/view/FireCard';
import { SwipeableCardStack } from 'react-native-swipeable-card-stack';

export default function HomeScreen() {
  return (
    <SwipeableCardStack
      data={fires}
      renderCard={FireCard}
      lockedDirections={['bottom', 'top']}
    />
  );
}
