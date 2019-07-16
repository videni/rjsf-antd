import React from 'react';

import { Form, Select } from 'antd';

// import { WidgetProps } from 'react-jsonschema-form';
import { asNumber, guessType } from 'react-jsonschema-form/lib/utils';

const nums = new Set(['number', 'integer']);

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
const processValue = (schema: any, value: any) => {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema;

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x: any) => guessType(x) === 'number')) {
      return asNumber(value);
    } else if (schema.enum.every((x: any) => guessType(x) === 'boolean')) {
      return value === 'true';
    }
  }

  return value;
};

const SelectWidget = ({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
}: any) => {
  const { enumOptions, enumDisabled } = options;

  const emptyValue = multiple ? [] : '';

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<{ name?: string; value: unknown }>) =>
    onChange(processValue(schema, value));

  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>): void =>
    onBlur(id, processValue(schema, value));

  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>): void =>
    onFocus(id, processValue(schema, value));

  return (
    <Select
      multiple={typeof multiple === 'undefined' ? false : multiple}
      value={typeof value === 'undefined' ? emptyValue : value}
      required={required}
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
