import { useQuery } from '@tanstack/react-query';
import AppClient from '~/AppClient';

export const useCardsQuery = () => {
  return useQuery({
    queryKey: ['cards'],
    queryFn: () => AppClient.card.getCardsRetrieveCards(),
  });
};
