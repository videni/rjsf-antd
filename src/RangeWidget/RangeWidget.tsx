import React from 'react';
import { Slider } from 'antd';
import { rangeSpec } from 'react-jsonschema-form/lib/utils';
import { WidgetProps } from 'react-jsonschema-form';
import { SliderValue } from 'antd/es/slider';

const RangeWidget = ({
  value,
  readonly,
  disabled,
  schema,
  // formContext,
  // registry,
  // rawErrors,
  options,
  onChange,
  label,
  id
}: WidgetProps) => {
  const sliderProps = { value, label, id, ...rangeSpec(schema), ...options };

  const _onChange = (value: SliderValue): void => onChange(value);

  return (
    <Slider
      {...sliderProps}
      disabled={disabled || readonly}
      onChange={_onChange}
    />
  );
};

export default RangeWidget;
