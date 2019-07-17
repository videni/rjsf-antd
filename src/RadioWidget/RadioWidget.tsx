import React from 'react';
import { Radio } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import { RadioChangeEvent } from 'antd/es/radio/interface';

const RadioWidget = ({
  id,
  options,
  value,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled } = options;

  const _onChange = (e: RadioChangeEvent): void => {
    onChange(e.target.value);
  };

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Radio.Group
      name={name}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    >
      {enumOptions.map((option: any, i: number) => {
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) !== -1;

        return (
          <Radio
            value={option.value}
            key={i}
            disabled={disabled || itemDisabled || readonly}
          >
            {`${option.label}`}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default RadioWidget;
