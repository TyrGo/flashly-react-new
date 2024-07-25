import { useAuth } from '~/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { LoaderWrapper } from '~/components/loaders';

export const OnlyAdminRoutable = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const { is_admin: isAdmin } = user;

  return (
    <LoaderWrapper isLoading={isLoading}>
      {isAuthenticated && isAdmin 
        ? <Outlet /> 
        : <Navigate replace to={'/cards/card'} />}
    </LoaderWrapper>
  );
};
