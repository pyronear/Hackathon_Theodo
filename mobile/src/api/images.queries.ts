import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FireType } from './images.types';

export const useImages = () => {
  const { data: images } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      let images: FireType[] = [];
      for (let index = 0; index < 50; index++) {
        try {
          const data = await axios.get(
            'http://57.128.107.129:8000/get_unlabeled_random_event',
          );

          images.push({
            gif: data.data.gif,
            img_list: data.data.img_list,
            id: data.data.event_id,
          });

        } catch (error) {
          console.error(error);
        }
      }
      return images;
    },
  });

  return { images };
};

export const useSendFireResult = () => {
  const { mutate } = useMutation({
    mutationFn: async (data: { id: number; label: number }) => {
      axios.post(`http://57.128.107.129:8000/labelize_event/${data.id}`, {
        label: data.label,
      });
    },
  });

  return { mutate };
};
