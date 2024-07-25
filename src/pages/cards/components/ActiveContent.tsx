import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { Card as CardType } from '~/api';
import { BinUpdate } from '~/types';

type ActiveContentProps = {
  displayDefn: boolean;
  card: CardType;
  toggleDefn: () => void;
  updateBin: (binUpdate: BinUpdate) => void;
};

export const ActiveContent = ({
  displayDefn,
  card,
  toggleDefn,
  updateBin,
}: ActiveContentProps) => {
  return (
    <>
      <CardContent>
        <Typography variant="h2">{card.word}</Typography>
        <Button variant="outlined" onClick={toggleDefn}>
          {displayDefn ? card.defn : 'Display definition'}
        </Button>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            updateBin({
              level: 'up',
              cardId: card.id as number,
            })
          }
        >
          I got it
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() =>
            updateBin({
              level: 'down',
              cardId: card.id as number,
            })
          }
        >
          I didn't
        </Button>
      </CardActions>
    </>
  );
};
