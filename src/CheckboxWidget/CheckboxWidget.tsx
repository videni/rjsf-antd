import React from 'react';

import { Checkbox } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({ target: { checked } }: CheckboxChangeEvent) =>
    onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <Checkbox
      checked={typeof value === 'undefined' ? false : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default CheckboxWidget;
