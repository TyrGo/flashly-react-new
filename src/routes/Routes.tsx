import { Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { CardRoutes } from './CardRoutes';

export const Routes = (
  <Route path="/" lazy={() => import('~/providers/Providers')}>
    <Route path="/" element={<Navigate to="/login" replace />} />
    {AuthRoutes}
    {CardRoutes}
  </Route>
);
