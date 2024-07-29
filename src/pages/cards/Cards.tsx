import { Loader } from '~/components/loaders';
import { Grid } from '@mui/material';
import { Card } from '~/api';
import { v4 as uuidv4 } from 'uuid';

import { CardEditor } from './components/CardEditor';
import { useCardsQuery } from './queries/cardsGet';
import { CardCreator } from './components/CardCreator';

export const Cards = () => {
  const { data: cards, isLoading: cardsLoading } = useCardsQuery();

  if (cardsLoading || !cards) {
    return <Loader />;
  }

  console.log('cards', cards);
  return (
    <Grid display="flex" gap={2} flexWrap="wrap">
      {cards.map((card: Card) => (
        <CardEditor key={uuidv4()} card={card} />
      ))}
      <CardCreator />
    </Grid>
  );
};
