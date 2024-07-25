import { UseFormReturn, FormProvider as Form } from 'react-hook-form';

type FormProviderProps = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

export const FormProvider = ({ 
    children, 
    onSubmit, 
    methods 
}: FormProviderProps) => 
    <Form {...methods}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </Form>;
