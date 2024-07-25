import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { jwtAtom } from '~/recoil/atoms';
import { useSetRecoilState } from 'recoil';
import * as Yup from 'yup';
import { useState } from 'react';
import { FormProvider, RHFTextField } from '~/components/hookForm';
import { paths } from '~/routes/paths';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLoginMutation } from './queries/authPost';
import { useRegisterMutation } from './queries/authCreate';

const LoginSchema = Yup.object().shape({
  username: Yup.string(),
  // .required('Email is required').email('Email must be a valid email address'),
  password: Yup.string()
    .min(6, 'Password must be at least 8 characters')
    .required('Password is required'),
});

type RegisterFormValues = {
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

  const { mutate: register, isLoading: isLoginLoading, error } = useRegisterMutation();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (formData: RegisterFormValues) => {
    const resp = await register(formData);

    if (resp) {
        setJwt(resp);
        navigate(paths.cards.list);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  console.log("error", error)
  return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack 
              spacing={2.5}
              maxWidth={350}
              sx={{ 
                background: (theme) => theme.palette.background.paper,
                padding: 4,
                borderRadius: 1,
              }}
            >
            <Typography variant='h4' gutterBottom>
                Register with Flashly
              </Typography>

              {error?.status === 401 && (
                <Alert severity='error'>
                    Username already taken.
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
