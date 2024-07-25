import { Box, Card as MUiCard, CardContent, CardActions } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from '~/components/hookForm';
import * as Yup from 'yup';
import { Card } from "~/api";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCardDeleteMutation } from "../queries/cardDelete";
import { useCardUpdateMutation } from "../queries/cardPatch";

type CardEditorProps = {
  card: Card;
};

type CardEditorFormValues = {
  word: string;
  defn: string;
};

const CardSchema = Yup.object().shape({
    word: Yup.string().required('Word is required'),
    defn: Yup.string().required('Definition is required'),
  });

export const CardEditor = ({ card }: CardEditorProps) =>  {
  const { id, defn, word } = card;
  const { mutate: updateCard, isLoading: isUpdatingCard } = useCardUpdateMutation();
  const { mutate: deleteCard, isLoading: isDeletingCard } = useCardDeleteMutation();


  const handleDelete = () => {
    deleteCard(id);
  }

  const methods = useForm({
    resolver: yupResolver(CardSchema),
    defaultValues: { word, defn },
  });
  const { handleSubmit, formState: { isSubmitting } } = methods;
  const isLoading = isSubmitting || isUpdatingCard || isDeletingCard;

   const onSubmit: SubmitHandler<CardEditorFormValues> = 
    (formData: CardEditorFormValues) => updateCard({ id, formData });

  return (
    <MUiCard>
      <FormProvider
        methods={methods} 
        onSubmit={handleSubmit(onSubmit)}
      >
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <RHFTextField
              name="word"
              label="Word"
              required
            />
            <RHFTextField
              label="Definition"
              name="defn"
              required
            />
          </Box>
        </CardContent>
        <CardActions 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <LoadingButton
            size="small"
            variant="contained"
            color="error"
            onClick={handleDelete}
            loading={isLoading}
            disabled={isLoading}
          >
            Delete
          </LoadingButton>
          <LoadingButton
            type="submit"
            size="small"
            variant="contained"
            loading={isLoading}
            disabled={isLoading}
          >
            Update
          </LoadingButton>
        </CardActions>
      </FormProvider>
    </MUiCard>
  )
}
