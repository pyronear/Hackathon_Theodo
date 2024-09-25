import { Pressable, StyleSheet } from 'react-native';
import { IconType } from './icons/Icon';

const size = 80;

type Props = {
  Icon: IconType;
  onPress: () => void;
  backgroundColor: string;
};

export const VoteButton = ({ Icon, onPress, backgroundColor }: Props) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Icon size={size / 2} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: size,
    aspectRatio: 1,
    borderRadius: size,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
});
