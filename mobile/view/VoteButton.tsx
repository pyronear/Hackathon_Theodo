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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
