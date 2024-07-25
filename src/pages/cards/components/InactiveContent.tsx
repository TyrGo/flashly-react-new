import { CardContent, Divider, Typography } from '@mui/material';

import { Timer } from './Timer';

type InactiveContentProps = {
  due: string;
  checkPointCb: () => void;
};

export const InactiveContent = ({
  due,
  checkPointCb,
}: InactiveContentProps) => {
  return (
    <CardContent>
      <Typography>You are temporarily done.</Typography>
      <Typography variant="caption">
        Please come back later to review more words.
      </Typography>
      <Divider sx={{ marginTop: 2 }} />
      <Timer
        due={due}
        direction="backward"
        checkpoints={[
          {
            time: 0,
            callback: checkPointCb,
          },
        ]}
      />
    </CardContent>
  );
};
