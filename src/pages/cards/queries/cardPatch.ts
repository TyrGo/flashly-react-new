import { useMutation } from '@tanstack/react-query';
import AppClient from '~/AppClient';
import { queryClient } from "~/providers/ReactQueryProvider";
import { CardEditorFormValues } from '~/types';

type mutationFnParams = {
  id: number;
  formData: CardEditorFormValues;
};

export const useCardUpdateMutation = () => {
  return useMutation({
    mutationFn: ({ 
      id, 
      formData
    }: mutationFnParams) => {
      return AppClient.card.patchCardsUpdateCard(
        id,
        { ...formData, user_id: id}
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries('cards');
    },
  });
}