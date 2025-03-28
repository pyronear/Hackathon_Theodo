import { API_URL } from '@/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FireType } from './images.types';

export const useImages = () => {
  const { data: images } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const promises = Array.from({ length: 50 }, () =>
        axios
          .get(`${API_URL}/get_unlabeled_random_event`)
          .then((data) => ({
            gif: data.data.gif,
            img_list: data.data.img_list,
            id: data.data.event_id,
          }))
          .catch((error) => {
            console.error(error);
            return null;
          }),
      );

      const results = await Promise.all(promises);
      const images = results.filter(
        (result): result is FireType => result !== null,
      );
      return images;
    },
  });

  return { images };
};

export const useSendFireResult = () => {
  const { mutate } = useMutation({
    mutationFn: async (data: { id: number; label: number }) => {
      axios.post(`${API_URL}/labelize_event/${data.id}`, {
        label: data.label,
      });
    },
  });

  return { mutate };
};
