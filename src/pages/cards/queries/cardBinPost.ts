import { useMutation } from '@tanstack/react-query';
import AppClient from '~/AppClient';
import { queryClient } from '~/providers/ReactQueryProvider';
import { BinUpdate } from '~/types';

export const useCardBinMutation = () => {
  return useMutation({
    mutationFn: ({ level, cardId }: BinUpdate) =>
      level === 'up'
        ? AppClient.card.postCardsBinUp(cardId)
        : AppClient.card.postCardsBinDown(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['card'] });
    },
  });
};
