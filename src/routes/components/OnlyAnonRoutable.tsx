import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '~/hooks';
import { LoaderWrapper } from '~/components/loaders';

export const OnlyAnonRoutable = () => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <LoaderWrapper isLoading={isLoading}>
      {isAuthenticated ? <Navigate replace to={'/cards/card'} /> : <Outlet />}
    </LoaderWrapper>
  );
};
