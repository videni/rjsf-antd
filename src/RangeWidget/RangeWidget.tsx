import React from 'react';

import { Form, Grid, Slider } from 'antd';

import { rangeSpec } from 'react-jsonschema-form/lib/utils';
import { WidgetProps } from 'react-jsonschema-form';

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  //formContext,
  //registry,
  //rawErrors,
  onChange,
  required,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const _onChange = ({}, value: any): void =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>): void =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>): void => onFocus(id, value);

  return (
    <Form.Item
      //error={!!rawErrors}
      required={required}
      id={id}
      label={label}
    >
      <Slider
        {...sliderProps}
        disabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </Form.Item>
  );
};

export default RangeWidget;
