import React from 'react';

import { InputNumber } from 'antd';

import { WidgetProps } from 'react-jsonschema-form';

const UpDownWidget = (props: WidgetProps) => {
  const {
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
    schema
  } = props;

  const _onChange = (value: number | undefined): void => onChange(value);

  const _onBlur = ({
    target: { value }
  }: React.FocusEvent<HTMLInputElement>): void => onBlur(id, value);

  const _onFocus = ({
    target: { value }
  }: React.FocusEvent<HTMLInputElement>): void => onFocus(id, value);

  // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).
  if (schema.multipleOf) {
    options.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== 'undefined') {
    options.min = schema.minimum;
  }

  if (typeof schema.maximum !== 'undefined') {
    options.max = schema.maximum;
  }

  return (
    <InputNumber
      id={id}
      {...options}
      autoFocus={autofocus}
      required={required}
      type="number"
      disabled={disabled || readonly}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default UpDownWidget;
