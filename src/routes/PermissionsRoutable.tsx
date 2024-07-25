import { useAuth } from '~/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { LoaderWrapper } from '~/components/loaders';
import { Permissions } from '~/types';

type PermissionsRoutableProps = {
  permissionType: `${Permissions}`;
};

export const PermissionsRoutable = ({ permissionType }: PermissionsRoutableProps) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const isAdmin = user?.is_admin || false;

  console.log('PermissionsRoutable rendered:', { permissionType, isAuthenticated, isAdmin, isLoading });

  if (isLoading) {
    return <LoaderWrapper isLoading={true} />;
  }

  switch (permissionType) {
    case Permissions.Anon:
      return !isAuthenticated 
        ? <Outlet /> 
        : <Navigate replace to="/cards/card" />;
    case Permissions.Authenticated:
      return isAuthenticated 
      ? <Outlet /> 
      : <Navigate replace to="/login" />;
    case Permissions.Admin:
      return isAuthenticated
        ? isAdmin
          ? <Outlet />
          : <Navigate replace to="/cards/card" />
        : <Navigate replace to="/login" />;
    default:
      return <Navigate replace to="/login" />;
  }
};
