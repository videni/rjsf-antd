import React from 'react';
import keys from 'lodash/keys';
import { List, Icon } from 'antd';
import examples from '../examples';
import styles from './MenuItems.less';

export default ({onSelectMenuItem }: any) => (
    <div
      className={styles.drawerList}
    >
      <List header="Showcase">
        {keys(examples).map(e => (
          <List.Item
            key={e}
            button={true}
            onClick={onSelectMenuItem(examples[e])}
          >
            <List.Item.Meta title={examples[e].title} />
          </List.Item>
        ))}
      </List>
    </div>
  );
