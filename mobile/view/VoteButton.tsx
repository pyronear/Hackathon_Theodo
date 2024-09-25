import { Pressable, StyleSheet } from 'react-native';
import { IconType } from './icons/Icon';

const size = 80;

type Props = {
  Icon: IconType;
  onPress: () => void;
};

export const VoteButton = ({ Icon, onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? '#3e73cf' : '#649dfc',
        },
      ]}
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
