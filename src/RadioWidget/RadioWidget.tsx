import React from 'react';

import { Form, Radio } from 'antd';

import { WidgetProps } from 'react-jsonschema-form';

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({}, value: any) =>
    onChange(schema.type === 'boolean' ? value !== 'false' : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const row = options ? options.inline : false;

  return (
    <Radio.Group
      name={name}
      value={`${value}`}
      row={row}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    >
      {enumOptions.map((option: any, i: number) => {
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) !== -1;

        const radio = (
          <Radio
            label={`${option.label}`}
            value={`${option.value}`}
            key={i}
            disabled={disabled || itemDisabled || readonly}
          />
        );

        return radio;
      })}
    </Radio.Group>
  );
};

export default RadioWidget;
