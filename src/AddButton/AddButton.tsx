import React from 'react';

import { AddButtonProps } from 'react-jsonschema-form';

import { Button, Icon } from 'antd';

const AddButton: React.FC<AddButtonProps> = props => (
  <Button {...props} color="secondary">
    <Icon type="plus" />
  </Button>
);

export default AddButton;
