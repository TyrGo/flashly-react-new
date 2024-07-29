import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Loader } from '~/components/loaders';

import { MUIProvider } from './MUIProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import ErrorBoundary from '~/layout/ErrorBoundary/ErrorBoundary';

export const Component = () => (
  <Suspense fallback={<Loader />}>
    <RecoilRoot>
      <MUIProvider>
        <ReactQueryProvider>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </ReactQueryProvider>
      </MUIProvider>
    </RecoilRoot>
  </Suspense>
);
