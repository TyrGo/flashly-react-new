import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { MUIProvider } from './MUIProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import CircularProgress from '@mui/material/CircularProgress';

export const Component = () => (
    <Suspense
        fallback={
        <CircularProgress
            sx={{
            position: 'absolute',
            zIndex: '1000',
            top: '50%',
            right: '50%',
            color: '#00A76F',
            }}
        />
        }
    >
        <RecoilRoot>
            <MUIProvider>
                    <ReactQueryProvider>
                            <Outlet />
                    </ReactQueryProvider>
            </MUIProvider>
        </RecoilRoot>
    </Suspense>
);
