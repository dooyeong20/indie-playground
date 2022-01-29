import React from 'react';
import { cls } from '../../util';
import styles from './Loading.module.css';

export function Loading() {
  return (
    <div className={cls(styles.container)}>
      <span className={cls(styles.loader)}>Loading ...</span>
    </div>
  );
}
