import React from 'react';

import { Form, Input } from 'antd';

import { WidgetProps } from 'react-jsonschema-form';

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
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
    <Form.Item
      //error={!!rawErrors}
      required={required}
    >
      <Input
        id={id}
        autoFocus={autofocus}
        label={label || schema.title}
        required={required}
        disabled={disabled || readonly}
        name={name}
        value={value}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </Form.Item>
  );
};

export default TextWidget;
