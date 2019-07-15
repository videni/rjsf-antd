import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import Typography from 'antd';

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {

    return (
      <Typography variant="subtitle2">
        {description}
      </Typography>
    );
  }

  return null;
};

export default DescriptionField;
