import { TaskAPI } from 'shared/api';
import { ButtonConfig } from '../button';

export type FormCreationConfig = {
  title: string;
  buttonConfig: ButtonConfig;
  submitCallback: (task: TaskAPI) => void;
};
