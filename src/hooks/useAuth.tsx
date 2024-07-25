import AppClient from '~/AppClient';
import { queryClient } from '~/providers/ReactQueryProvider';
import { jwtAtom } from '~/recoil/atoms';
import { useQuery } from '@tanstack/react-query';
import { useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/routes/paths';

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => AppClient.auth.getAuthCheck(),
    retry: false,   
  })

  const navigate = useNavigate();
  const isAuthenticated = !isError && Boolean(user);
  const isAdmin = isAuthenticated && user.is_admin;

  const resetJwt = useResetRecoilState(jwtAtom);

  const logout = async () => {
    resetJwt();
    queryClient.clear();
    navigate(paths.auth.login);
  };

  return {
    user,
    isError,
    isLoading,
    isAdmin,
    isAuthenticated,
    logout,
    refetch,
  };
};
