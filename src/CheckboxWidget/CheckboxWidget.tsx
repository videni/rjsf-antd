import React from 'react';

import { Checkbox } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const CheckboxWidget: React.FC<WidgetProps> = (props: WidgetProps) => {
  const {
    id,
    value,
    disabled,
    readonly,
    autofocus,
    onChange,
  }: WidgetProps = props;

  const _onChange = ({ target: { checked } }: CheckboxChangeEvent) =>
    onChange(checked);

  return (
    <Checkbox
      checked={typeof value === 'undefined' ? false : value}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
    />
  );
};

export default CheckboxWidget;
