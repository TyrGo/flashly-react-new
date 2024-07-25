import { TokenResponse, User } from "~/api";
import { JwtAtom, jwtAtom } from "~/recoil/atoms/jwt";
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import AppClient from '~/AppClient';
import { paths } from "~/routes/paths";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setJwt = useSetRecoilState(jwtAtom);

  return useMutation({
    mutationFn: (formData: User) => AppClient.auth.postAuthToken(formData),
    onSuccess: (data: TokenResponse) => {
        const jwt: JwtAtom = {
            access: data.token as string,
            // refresh: data.refresh, // TODO: Implement refresh token
        };
        setJwt(jwt);
        navigate(paths.cards.view);
      }
    }
  );
};

