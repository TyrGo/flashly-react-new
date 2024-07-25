import { useAuth } from '~/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { LoaderWrapper } from '~/components/loaders';

export const OnlyAuthenticatedRoutable = () => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <LoaderWrapper isLoading={isLoading}>
      {isAuthenticated ? <Outlet /> : <Navigate replace to={'/login'} />}
    </LoaderWrapper>
  );
};
