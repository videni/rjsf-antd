import React from 'react';

import { Card, Typography, List } from 'antd';

import { ErrorListProps } from 'react-jsonschema-form';

const ErrorList = ({ errors }: ErrorListProps) => (
  <Card>
    <Typography>Errors</Typography>
    <List>
      {errors.map((error, i: number) => {
        return <List.Item key={i}>{error.stack}</List.Item>;
      })}
    </List>
  </Card>
);

export default ErrorList;
