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
  label,
}: FieldTemplateProps) => {
  return (
    <Form.Item
      validateStatus={rawErrors.length ? 'error' : ''}
      required={required}
      label={label || schema.title}
      htmlFor={id}
      id={id}
    >
      {children}
      {displayLabel && rawDescription ? (
        <Typography variant="caption" color="textSecondary">
          {rawDescription}
        </Typography>
      ) : null}
      {rawErrors.length > 0 && (
        <List dense={true}>
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
