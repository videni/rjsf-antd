import React from 'react';

import { Button, Icon } from 'antd';
import { ButtonProps } from 'antd/es/button';

const mappings: any = {
  remove: <Icon type="delete" />,
  plus: <Icon type="plus" />,
  'arrow-up': <Icon type="arrow-up" />,
  'arrow-down': <Icon type="arrow-down" />
};

type IconButtonProps = ButtonProps & {
  icon: string;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, ...otherProps } = props;

  return (
    <Button {...otherProps} size="small">
      {mappings[icon]}
    </Button>
  );
};

export default IconButton;
