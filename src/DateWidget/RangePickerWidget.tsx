import React from 'react';
import { DatePicker } from 'antd';
import { RangePickerValue } from 'antd/es/date-picker/interface';
import { WidgetProps } from 'react-jsonschema-form';

const { RangePicker } = DatePicker;

const RangePickerWidget = ({
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
}: WidgetProps) => {
  const _onChange = (
    dates: RangePickerValue,
    dateStrings: [string, string]
  ): void => {};

  const { showTime, format } = options;

  return (
    <RangePicker
      {...options}
      autoFocus={autofocus}
      disabled={disabled || readonly}
      value={value}
      onChange={_onChange}
    />
  );
};

export default RangePickerWidget;
