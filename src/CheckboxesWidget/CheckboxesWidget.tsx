import React from 'react';
import { Checkbox } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

const CheckboxesWidget = ({
  id,
  disabled,
  options,
  value,
  autofocus,
  readonly,
  onChange,
}: WidgetProps) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange = (checkedValue: Array<CheckboxValueType>): void => {
    onChange(checkedValue);
  };

  return (
    <Checkbox.Group onChange={_onChange}>
      {enumOptions.map((option: any, index: number) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) !== -1;
        return (
          <Checkbox
            id={`${id}_${index}`}
            checked={checked}
            disabled={disabled || itemDisabled || readonly}
            autoFocus={autofocus && index === 0}
            value={option.value}
          >
            {option.label}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  );
};

export default CheckboxesWidget;
