import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  getAspectRatioSize,
  ResumableZoom,
  useImageResolution,
} from 'react-native-zoom-toolkit';
import { VoteButton } from '../src/view/VoteButton';
import { CloseIcon } from '../src/view/icons/CloseIcon';

export default function ImageZoom() {
  const router = useRouter();

  const { imageUrl } = useLocalSearchParams<{ imageUrl: string }>();

  const { width } = useWindowDimensions();

  const { isFetching, resolution } = useImageResolution({ uri: imageUrl });
  if (isFetching || resolution === undefined) {
    return null;
  }

  const imageSize = getAspectRatioSize({
    aspectRatio: resolution.width / resolution.height,
    width: width,
  });

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <ResumableZoom maxScale={resolution}>
          <Image
            source={{ uri: imageUrl }}
            resizeMethod={'scale'}
            style={imageSize}
          />
        </ResumableZoom>
        <SafeAreaView style={styles.headerComponent} edges={['top']}>
          <VoteButton
            Icon={CloseIcon}
            onPress={router.back}
            size={64}
            backgroundColor="#424969"
          />
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerComponent: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 16,
    right: 16,
  },
});
