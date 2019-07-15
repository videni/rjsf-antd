import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import { Card, Divider, Typography } from 'antd';

const TitleField = ({ title }: FieldProps) => (
  <>
    <Card mb={1}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
    </Card>
  </>
);

export default TitleField;
