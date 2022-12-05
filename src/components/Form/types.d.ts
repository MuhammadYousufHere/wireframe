import React, { InputHTMLAttributes } from 'react';
export interface BInputProps extends InputHTMLAttributes {
  type: string;
  placeholder?: string;
  value?: string;
  Icon?: JSX.Element | React.ReactElement | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAdd?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  id?: string;
  className?: string;
  name?: string;
  label?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCorrect?: string;
}

export interface BDropdownProps {
  label?: string;
  id?: string;
}
export interface BChipsProps {
  value?: string;
  id?: string;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
