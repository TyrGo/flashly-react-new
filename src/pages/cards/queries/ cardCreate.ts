import { useMutation } from '@tanstack/react-query';
import AppClient from '~/AppClient';
import { Card } from '~/api';
import { queryClient } from '~/providers/ReactQueryProvider';

export const useCardCreateMutation = () => {
  return useMutation({
    mutationFn: ({ formData }: Record<string, Card>) => {
      return AppClient.card.postCardsCreateCard(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('cards');
    },
  });
};
