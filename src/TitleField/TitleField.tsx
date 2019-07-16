import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import { Divider, Typography } from 'antd';

const TitleField = ({ title }: FieldProps) => (
  <>
    <Typography>{title}</Typography>
    <Divider />
  </>
);

export default TitleField;
