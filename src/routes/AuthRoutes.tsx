import { Route } from 'react-router-dom';
import { OnlyAnonRoutable } from '~/routes/components';
import { AuthLayout } from '~/layout/AuthLayout';
import { paths } from './paths';

// TODO: simplify strings below. Note: vite relies on static analysis so variables might not work

export const AuthRoutes = (
        <Route element={<OnlyAnonRoutable />}>
            <Route element={<AuthLayout />}>
                <Route lazy={() => import('~/pages/auth/Login')} path={paths.auth.login} />
            </Route>
        </Route>
);
