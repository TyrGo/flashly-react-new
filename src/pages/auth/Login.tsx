import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { jwtAtom } from '~/recoil/atoms';
import { useSetRecoilState } from 'recoil';
import * as Yup from 'yup';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import { FormProvider, RHFTextField } from '~/components/hookForm';
import { paths } from '~/routes/paths';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLoginMutation } from './queries/authPost';

const LoginSchema = Yup.object().shape({
  username: Yup.string(),
  // .required('Email is required').email('Email must be a valid email address'),
  password: Yup.string()
    .min(6, 'Password must be at least 8 characters')
    .required('Password is required'),
});

type LoginFormValues = {
  username: string;
  password: string;
  google_auth_token?: string;
};

export const Component = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const setJwt = useSetRecoilState(jwtAtom);

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { mutate: login, isLoading: isLoginLoading, error } = useLoginMutation();

  const onSubmit: SubmitHandler<LoginFormValues> = async (formData: LoginFormValues) => {
    const resp = await login(formData);

    if (resp) {
        setJwt(resp);
        navigate(paths.cards.view); // TODO: admin to list
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack justifyContent='flex-start' alignItems='flex-start' spacing={2} sx={{ mb: 5 }}>
            <Typography variant='h4'>Log in to Flashly</Typography>
          </Stack>

          <Stack spacing={2.5}>
            {error?.status === 401 && (
              <Alert severity='error'>
                You have entered an invalid username or password.
              </Alert>
            )}

            <RHFTextField label='Username' name='username' />

            <RHFTextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={togglePassword}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label='Password'
              name='password'
              type={showPassword ? 'text' : 'password'}
            />
            <Divider />
            <Link
              color='inherit'
              sx={{ alignSelf: 'flex-end' }}
              underline='always'
              variant='body2'
              href={'/reset_password'}
            >
              Forgot password?
            </Link>

            <LoadingButton
              fullWidth
              color='inherit'
              loading={isSubmitting || isLoginLoading}
              disabled={isSubmitting || isLoginLoading}
              size='large'
              type='submit'
              variant='contained'
            >
              Login
            </LoadingButton>
          </Stack>
        </FormProvider>
  );
};
