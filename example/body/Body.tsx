import React from 'react';

import styles from './Body.less';
import Example from './Example';

export default ({ selectedDemo }: any) => (
  <div className={styles.body}>
    <Example data={selectedDemo} />
  </div>
);
