import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Children } from '~/types';

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: Children) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        initialIsOpen={import.meta.env.MODE === 'development'}
      />
      {children}
    </QueryClientProvider>
  );
};
