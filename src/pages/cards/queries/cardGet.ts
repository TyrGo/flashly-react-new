import { useQuery } from '@tanstack/react-query';
import AppClient from '~/AppClient';

export const useCardQuery = () => {
    return useQuery({
        queryKey: ['card'],
        queryFn: () => AppClient.card.getCardsRetrieveCard(),
    });
}