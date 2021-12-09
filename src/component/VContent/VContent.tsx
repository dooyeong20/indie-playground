import React from 'react';
import { cls } from '../../util';
import styles from './VContent.module.css';

export function VContent({ imgPath }: { imgPath: string }) {
  return (
    <div className={cls(styles.container)}>
      <picture className={cls(styles.pictureBox)}>
        <img
          src={imgPath}
          alt="임시 이미지 alt"
          className={cls(styles.imageBox)}
        />
      </picture>
      <p className={cls(styles.detail)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
        veniam.
      </p>
    </div>
  );
}