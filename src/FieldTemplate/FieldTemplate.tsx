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
}: FieldTemplateProps) => {
  return (
    <Form.Item validateStatus={rawErrors.length ? error : ''}>
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
      {rawHelp && <Tooltip id={id}>{rawHelp}</Tooltip>}
    </Form.Item>
  );
};

export default FieldTemplate;
