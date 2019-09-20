import React from 'react';
import { FieldTemplateProps } from 'react-jsonschema-form';
import { Form, Tooltip, List, Typography } from 'antd';

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
  required,
  schema,
  label
}: FieldTemplateProps) => {
  // simply return children, we don't want an object is wrapped in Form.Item
  // every property should have their own Form.Item wrapper
  if (schema.type === 'object') {
    return <>{children}</>;
  }

  return (
    <Form.Item
      validateStatus={rawErrors.length ? 'error' : ''}
      required={required}
      label={displayLabel && schema.title}
      htmlFor={id}
      id={id}
    >
      {children}
      {displayLabel && rawDescription ? (
        <Typography>{rawDescription}</Typography>
      ) : null}
      {rawErrors.length > 0 && (
        <List>
          {rawErrors.map((error, i: number) => {
            return (
              <List.Item key={i}>
                <List.Item.Meta title={error} />
              </List.Item>
            );
          })}
        </List>
      )}
      {rawHelp && <Tooltip>{rawHelp}</Tooltip>}
    </Form.Item>
  );
};

export default FieldTemplate;
