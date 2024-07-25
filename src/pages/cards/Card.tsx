import { useEffect, useState } from 'react';
import { Card as MUICard, Typography } from '@mui/material';
import { Loader } from '~/components/loaders';
import { calculateRemainingTime } from '~/utils';

import { ActiveContent } from './components/ActiveContent';
import { InactiveContent } from './components/InactiveContent';
import { useCardQuery } from './queries/cardGet';
import { useCardBinMutation } from './queries/cardBinPost';

export const Card = () => {
  const [displayDefn, setDisplayDefn] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);

  const { data: card, isLoading: cardLoading } = useCardQuery();
  const { mutate: updateBin } = useCardBinMutation();

  useEffect(() => {
    if (card?.due) {
      const timeRemaining = calculateRemainingTime(card.due) > 0;
      setDisplayCard(!timeRemaining);
    }
  }, [card]);

  const toggleDefn = () => {
    setDisplayDefn(!displayDefn);
  };

  const checkPointCb = () => {
    setDisplayCard(true);
  };

  if (cardLoading) {
    return <Loader />;
  }

  const { due, message } = card;

  return (
    <MUICard>
      {message && <Typography>{message}</Typography>}
      {!message && (
        <>
          {displayCard && (
            <ActiveContent
              displayDefn={displayDefn}
              card={card}
              toggleDefn={toggleDefn}
              updateBin={updateBin}
            />
          )}
          {!displayCard && (
            <InactiveContent due={due} checkPointCb={checkPointCb} />
          )}
        </>
      )}
    </MUICard>
  );
};
