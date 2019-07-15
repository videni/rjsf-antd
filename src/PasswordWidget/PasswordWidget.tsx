import React from 'react';
import { Form, Input } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';

const PasswordWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  label,
  onFocus,
  onBlur,
  onChange,
  options,
  autofocus,
  schema,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Form.Item required={required} label={label || schema.title}>
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
    </Form.Item>
  );
};

export default PasswordWidget;
