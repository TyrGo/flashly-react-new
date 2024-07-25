import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Loader } from '~/components/loaders';

import { MUIProvider } from './MUIProvider';
import { ReactQueryProvider } from './ReactQueryProvider';

export const Component = () => (
  <Suspense fallback={<Loader />}>
    <RecoilRoot>
      <MUIProvider>
        <ReactQueryProvider>
          <Outlet />
        </ReactQueryProvider>
      </MUIProvider>
    </RecoilRoot>
  </Suspense>
);
