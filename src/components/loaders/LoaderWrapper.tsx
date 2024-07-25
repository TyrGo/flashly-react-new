import { Children } from '~/types';
import { Box, CircularProgress } from '@mui/material';

type LoaderWrapperProps = Partial<Children> & {
  height?: string | null | undefined;
  width?: string | null | undefined;
  size?: string;
  isLoading: boolean;
  loadingComponent?: React.ReactNode;
};

export const LoaderWrapper = ({
  children,
  height,
  width,
  isLoading,
  size,
  loadingComponent,
}: LoaderWrapperProps) => {

  if (isLoading) {
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
        {loadingComponent 
          ? loadingComponent 
          : <CircularProgress size={size ? size : 40} />
        }
      </Box>
    );
  }

  return <>{children}</>;
};
