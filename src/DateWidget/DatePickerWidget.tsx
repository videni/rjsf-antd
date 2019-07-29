import React from 'react';
import { DatePicker } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import * as moment from 'moment';

const DatePickerWidget = ({
  required,
  readonly,
  disabled,
  value,
  onChange,
  autofocus,
  options,
  schema
}: WidgetProps) => {
  const _onChange = (date: moment.Moment, dateString: string): void =>{
    onChange(dateString);
  }

  return (
    <DatePicker
      {...options}
      autoFocus={autofocus}
      disabled={disabled || readonly}
      value={value != null ? moment(value): value}
      onChange={_onChange}
    />
  );
};

export default DatePickerWidget;
