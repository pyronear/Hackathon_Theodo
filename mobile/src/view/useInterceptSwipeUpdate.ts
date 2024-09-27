import type { SwipeUpdate } from 'react-native-swipeable-card-stack';
import { useSendFireResult } from '../api/images.queries';
import type { FireType } from '../api/images.types';

export const useInterceptSwipeUpdate = () => {
  const { mutate } = useSendFireResult();

  const interceptSwipeUpdate = (swipeUpdate: SwipeUpdate<FireType>) => {
    const imageId = swipeUpdate.currentDataItem.id;
    const labelId = swipeDirectionToLabelId[swipeUpdate.direction];

    if (labelId !== undefined && swipeUpdate.phase === 'ended') {
      mutate({ id: imageId, label: labelId });
    }
  };

  return { interceptSwipeUpdate };
};

const swipeDirectionToLabelId = {
  left: -1,
  right: 1,
  bottom: 0,
  top: undefined,
};
