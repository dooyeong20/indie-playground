import React from 'react';
import { cls } from '../../util';
import styles from './VContent.module.css';

export function VContent({ imgPath }: { imgPath: string }) {
  return (
    <div className={cls(styles.container)}>
      <div
        className={cls(styles.imageBox)}
        style={{ background: `center / contain no-repeat url(${imgPath})` }}
      ></div>
      <p className={cls(styles.detail)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
        veniam.
      </p>
    </div>
  );
}
