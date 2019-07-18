import React from 'react';
import { Input } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';

const PasswordWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  onFocus,
  onBlur,
  onChange,
  options,
  autofocus
}: WidgetProps) => {
  const _onChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value }
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Input
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      type="password"
      value={value}
      onFocus={_onFocus}
      onBlur={_onBlur}
      onChange={_onChange}
    />
  );
};

export default PasswordWidget;
