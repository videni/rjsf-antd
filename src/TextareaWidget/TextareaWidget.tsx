import React from 'react';
import { WidgetProps } from 'react-jsonschema-form';
import { Input } from 'antd';

type CustomWidgetProps = WidgetProps & {
  options: any;
};

const { TextArea } = Input;

const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
}: CustomWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>): void =>
    onChange(value === '' ? options.emptyValue : value);

  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>): void => onBlur(id, value);

  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>): void => onFocus(id, value);

  return (
    <TextArea
      placeholder={placeholder}
      disabled={disabled || readonly}
      value={value}
      required={required}
      autoFocus={autofocus}
      rows={options.rows || 5}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default TextareaWidget;
