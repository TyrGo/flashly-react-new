import { Box, CircularProgress } from '@mui/material';

type LoaderProps = {
  height?: string | null | undefined;
  width?: string | null | undefined;
  size?: string;
};

export const Loader = ({
  height,
  width,
  size,
}: LoaderProps) => {

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: width ? width : '100%',
          justifyContent: 'center',
          height: height ? height : '100px',
        }}
      >
        <CircularProgress size={size ? size : 40} />
      </Box>
    );
}
