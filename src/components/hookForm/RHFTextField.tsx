import {
  Controller,
  useFormContext,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps & {
  name: string;
  hideError?: boolean;
};

type RenderProps = {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formState: UseFormStateReturn<any>;
};

export const RHFTextField = ({
  name,
  hideError,
  helperText,
  type,
  ...other
}: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }: RenderProps) => {
        const { value, onChange } = field;
        const { error } = fieldState;

        return (
          <TextField
            {...field}
            fullWidth
            type={type}
            value={type === 'number' && value === 0 ? '' : value}
            onChange={({ target }) => {
              const { value } = target;

              type === 'number' ? onChange(Number(value)) : onChange(value);
            }}
            error={!!error}
            helperText={error && !hideError ? error?.message : helperText}
            {...other}
          />
        );
      }}
    />
  );
};
