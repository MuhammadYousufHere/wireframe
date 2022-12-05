export type BVariantProps = {
  variant: keyof typeof BVariant;
};
export interface BProps {
  title: string;
  variant?: BVariantProps['variant'];
  withIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const BVariant = {
  primary: 'primary',
  secondary: 'secondary',
  outlined: 'outlined',
  text: 'text',
  link: 'link',
  pill: 'pill',
};
