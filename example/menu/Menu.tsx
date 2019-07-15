import React, { useState } from 'react';
import { Drawer } from 'antd';
import MenuItems from './MenuItems';
import styles from './Menu.less';

export default ({ open, onSelectMenuItem }: any) => {
  return (
    <Drawer open={open} className={styles.leftDrawer}>
      <MenuItems onSelectMenuItem={onSelectMenuItem} />
    </Drawer>
  );
};
