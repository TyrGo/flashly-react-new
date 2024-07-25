import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { MUIProvider } from './MUIProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import { Loader } from '~/components/loaders';

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
