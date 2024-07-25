import { Route } from 'react-router-dom';
import { OnlyAnonRoutable } from '~/routes/components';
import { paths } from './paths';
import { Login } from '~/pages/auth/Login';

export const AuthRoutes = (
    <Route element={<OnlyAnonRoutable />}>
        <Route element={<Login />} path={paths.auth.login} />
        <Route lazy={() => import('~/pages/auth/Register')} path={paths.auth.register} />
    </Route>
);
