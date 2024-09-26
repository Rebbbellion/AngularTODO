import { ConfigContainer } from 'shared/lib';

export type ButtonConfig = {
  title: string;
  svgId: string;
  stylesClass: string;
};

export const BUTTON_CONFIGS: ConfigContainer<ButtonConfig> = {
  createBtn: {
    title: 'Create',
    svgId: 'plus',
    stylesClass: 'create-btn',
  },
  editBtn: {
    title: 'Edit',
    svgId: 'edit',
    stylesClass: 'edit-btn',
  },
};
