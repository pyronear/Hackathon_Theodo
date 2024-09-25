import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FireType } from './images.types';

export const useImages = () => {
  const { data: images } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      let id = 0;
      let images:FireType[] = [];
      for (let index = 0; index < 50; index++) {
        const data = await axios.get(
          'http://141.94.127.211:8000/get_unlabeled_random_event',
        );
        images.push({ gif: data.data.gif, img_list: data.data.img_list, id });
        id++;
      }
      return images;
    },
  });

  return { images };
};