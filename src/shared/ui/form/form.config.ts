import { ButtonConfig } from '../button';
import { FormValues } from './form.model';

export type FormCreationConfig = {
  title: string;
  buttonConfig: ButtonConfig;
  formType: 'create' | 'edit';
  formValues: FormValues;
};
