import { Pressable, StyleSheet } from 'react-native';
import { IconType } from './icons/Icon';

type Props = {
  Icon: IconType;
  onPress: () => void;
  size: number;
  backgroundColor: string;
};

export const VoteButton = ({ Icon, onPress, backgroundColor, size }: Props) => {
  return (
    <Pressable
      style={[
        styles.container,
        { width: size, backgroundColor, borderRadius: size },
      ]}
      onPress={onPress}
    >
      <Icon size={size / 2} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
});
