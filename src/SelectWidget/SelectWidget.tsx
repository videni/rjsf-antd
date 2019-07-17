import React from 'react';
import { Form, Select } from 'antd';
// import { WidgetProps } from 'react-jsonschema-form';

const SelectWidget = (props: any) => {
  const {
    schema,
    id,
    options,
    label,
    multiple,
    required,
    disabled,
    readonly,
    value,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const { enumOptions, enumDisabled } = options;
  let mode = multiple ? 'multiple' : 'default';
  if (options.mode) {
    mode = options.mode;
  }

  const _onChange = (
    value: any,
    option: React.ReactElement<any> | React.ReactElement<any>[]
  ): void => {
    onChange(value);
  };

  const _onBlur = (value): void => {
    onBlur(value);
  };

  const _onFocus = () => {
    onFocus();
  };

  return (
    <Select
      mode={mode}
      value={value}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    >
      {enumOptions.map(({ value, label }: any, i: number) => {
        const disabled: any =
          enumDisabled && enumDisabled.indexOf(value) !== -1;

        return (
          <Select.Option key={i} value={value} disabled={disabled}>
            {label}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default SelectWidget;
