import LoadingButton from '@mui/lab/LoadingButton';
import { Box, CardActions, CardContent, Card as MUICard } from '@mui/material';
import { FormProvider, RHFTextField } from '~/components/hookForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { CardEditorFormValues } from '~/types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useCardCreateMutation } from '../queries/ cardCreate';

const CardSchema = Yup.object().shape({
  word: Yup.string().required('Word is required'),
  defn: Yup.string().required('Definition is required'),
});

export const CardCreator = () => {
  const methods = useForm({
    resolver: yupResolver(CardSchema),
    defaultValues: {
      word: '',
      defn: '',
    },
  });

  const { mutate: createCard, isPending: isCreatingCard } =
    useCardCreateMutation();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  const isLoading = isSubmitting || isCreatingCard;

  const onSubmit: SubmitHandler<CardEditorFormValues> = (
    formData: CardEditorFormValues,
  ) => {
    createCard(
      { formData },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <Box position="relative">
      <AddCircleOutlineIcon
        sx={{
          position: 'absolute',
          top: -12,
          left: -12,
          width: 32,
          height: 32,
          borderRadius: '100%',
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      />
      <MUICard
        sx={{
          borderWidth: 2,
          borderColor: (theme) => theme.palette.error.main,
          borderStyle: 'solid',
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2}>
              <RHFTextField name="word" label="Word" required />
              <RHFTextField label="Definition" name="defn" required />
            </Box>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <LoadingButton
              type="submit"
              size="small"
              variant="contained"
              loading={isLoading}
              disabled={isLoading}
            >
              Create
            </LoadingButton>
          </CardActions>
        </FormProvider>
      </MUICard>
    </Box>
  );
};
