import { fires } from '@/domain/fires';
import { FireCard } from '@/view/FireCard';

export default function HomeScreen() {
  return <FireCard fireItem={fires[0]} />;
}
