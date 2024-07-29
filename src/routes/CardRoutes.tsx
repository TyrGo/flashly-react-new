import { Route } from 'react-router-dom';
import { Layout } from '~/layout/Layout';
import { Card, Cards } from '~/pages/cards';

import { paths } from './paths';
import { OnlyAuthenticatedRoutable } from './components';
import { PageNotFound } from '~/pages/errors/PageNotFound';

export const CardRoutes = (
  <Route element={<OnlyAuthenticatedRoutable />}>
    <Route element={<Layout />}>
      <Route element={<Card />} path={paths.cards.view} />
      <Route element={<Card />} path={paths.cards.view} />
      <Route element={<Cards />} path={paths.cards.list} />
      <Route element={<PageNotFound />} path="*" />
    </Route>
  </Route>
);
