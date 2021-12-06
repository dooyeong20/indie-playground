import React from 'react';
import styles from './HotContent.module.css';
import { cls } from '../../util';

export function HotContent() {
  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>hot</h2>
      <div className={cls(styles.imageBox)}></div>
      <div className={cls(styles.indicatorContainer)}>
        <div className={cls(styles.indicator)}></div>
        <div className={cls(styles.indicator, styles.active)}></div>
        <div className={cls(styles.indicator)}></div>
        <div className={cls(styles.indicator)}></div>
        <div className={cls(styles.indicator)}></div>
      </div>
    </div>
  );
}
