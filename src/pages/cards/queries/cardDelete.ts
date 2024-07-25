import { useMutation } from '@tanstack/react-query';
import AppClient from '~/AppClient';
import { queryClient } from '~/providers/ReactQueryProvider';

export const useCardDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: number) => {
      console.log('id', id);
      return AppClient.card.deleteCardsDeleteCard(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('cards');
    },
  });
};
