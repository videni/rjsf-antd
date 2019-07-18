import React from 'react';
import { Radio } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import { RadioChangeEvent } from 'antd/es/radio/interface';

const RadioWidget = ({
  options,
  value,
  disabled,
  readonly,
  onChange,
}: WidgetProps) => {
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled } = options;

  const _onChange = (e: RadioChangeEvent): void => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group name={name} value={value} onChange={_onChange}>
      {(enumOptions as object[]).map((option: any, i: number) => {
        const itemDisabled =
          enumDisabled &&
          (enumDisabled as string[]).indexOf(option.value) !== -1;

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
