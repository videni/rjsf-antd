import React from 'react';

import { Input } from 'antd';

import { WidgetProps } from 'react-jsonschema-form';

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void =>
    onChange(value === '' ? options.emptyValue : value);

  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>): void => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>): void => onFocus(id, value);

  return (
    <Input
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      name={name}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default TextWidget;
