import { Box, Typography } from "@mui/material";

export const ErrorMessage = () => {
  return (
    
      <Box 
        display="flex" 
        flexDirection="column"
        justifyContent="center" 
        alignItems="center"
        sx={{
            background: (theme) => theme.palette.background.paper,
            padding: 4,
            borderRadius: 1,
        }}
        >
        <Typography variant="h4" gutterBottom>
            Oops!
        </Typography>
        <Typography variant="h6">
            Something went wrong
        </Typography>
      </Box>
  );
}
