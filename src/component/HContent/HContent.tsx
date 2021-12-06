import React from 'react';
import { cls } from '../../util';
import styles from './HContent.module.css';

interface IProps {
  imgPath: string;
}

export function HContent({ imgPath }: IProps) {
  return (
    <div className={cls(styles.container)}>
      <img src={imgPath} alt="앱 이미지" className={cls(styles.image)} />
      <div className={cls(styles.detail)}>
        <span className={cls(styles.title)}>임시 타이틀</span>
        <span className={cls(styles.rating)}>9.6 / 10</span>
        <span className={cls(styles.review)}>
          {`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          et vitae. Impedit, aspernatur eius sunt tenetur itaque, quod possimus,
          voluptates vel alias ea enim ut cum sit perferendis et iste!`.slice(
            0,
            50
          ) + '...'}
        </span>
      </div>
    </div>
  );
}
