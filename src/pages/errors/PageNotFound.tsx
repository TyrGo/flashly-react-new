import { Box, Typography } from '@mui/material';

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.paper,
        padding: 4,
        borderRadius: 1,
      }}
    >
      <Typography variant="h4">Page Not Found</Typography>
    </Box>
  );
};
