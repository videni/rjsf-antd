import React from 'react';

import { Form, Checkbox } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = (event: CheckboxChangeEvent) => onChange(event);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <Form.Item required={required} label={label}>
      <Checkbox
        id={id}
        checked={typeof value === 'undefined' ? false : value}
        required={required}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </Form.Item>
  );
};

export default CheckboxWidget;
