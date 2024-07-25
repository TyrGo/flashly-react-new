import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { createTimeModel, useTimeModel } from 'react-compound-timer';
import { calculateRemainingTime } from '~/utils';

interface TimerProps {
  due: string;
  direction: 'forward' | 'backward';
  checkpoints: { time: number; callback: () => void }[];
}

const remainingTime = (n: number, unit: string) =>
  `${n} ${unit}${n === 0 || n > 1 ? 's' : ''}`;

const getRemainingTimes = (
  days: number,
  hrs: number,
  mins: number,
  secs: number,
) => [
  remainingTime(days, 'day'),
  remainingTime(hrs, 'hr'),
  remainingTime(mins, 'min'),
  remainingTime(secs, 'sec'),
];

export const Timer: React.FC<TimerProps> = ({
  due,
  direction,
  checkpoints,
}) => {
  const initialTime = useMemo(() => calculateRemainingTime(due), [due]);
  const timer = useMemo(
    () => createTimeModel({ initialTime, direction, checkpoints }),
    [initialTime, checkpoints, direction],
  );
  const { value } = useTimeModel(timer);
  const { d: days, h: hrs, m: mins, s: secs } = value;
  const remainingTimes = getRemainingTimes(days, hrs, mins, secs);

  return (
    <Box display="flex" gap={1} justifyContent="center" p={2}>
      {remainingTimes.map((remainingTime, index) => (
        <Typography key={index} variant="caption">
          {remainingTime}
        </Typography>
      ))}
    </Box>
  );
};
