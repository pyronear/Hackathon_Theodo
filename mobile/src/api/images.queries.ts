import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FireType } from './images.types';

export const useImages = () => {
  const { data: images } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      let images: FireType[] = [];
      for (let index = 0; index < 50; index++) {
        const data = await axios.get(
          'http://141.94.127.211:8000/get_unlabeled_random_event',
        );
        images.push({
          gif: data.data.gif,
          img_list: data.data.img_list,
          id: data.data.event_id,
        });
      }

      const koalaImage =
        'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

      images = [
        ...images.slice(0, 10),
        { gif: koalaImage, img_list: [], id: 0 },
        ...images.slice(10),
      ];
      return images;
    },
  });

  return { images };
};

export const useSendFireResult = () => {
  const { mutate } = useMutation({
    mutationFn: async (data: { id: number; label: number }) => {
      axios.post(`http://141.94.127.211:8000/labelize_event/${data.id}`, {
        label: data.label,
      });
    },
  });

  return { mutate };
};
