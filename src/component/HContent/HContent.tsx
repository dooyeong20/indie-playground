import React from 'react';
import { Link } from 'react-router-dom';
import { cls } from '../../util';
import styles from './HContent.module.css';

interface IProps {
  id: string;
  imgPath: string;
  title: string;
}

export function HContent({ id, imgPath, title }: IProps) {
  return (
    <Link to={`detail/${id}`} className={cls(styles.container)}>
      <img src={imgPath} alt="앱 이미지" className={cls(styles.image)} />
      <div className={cls(styles.detail)}>
        <span className={cls(styles.title)}>{title}</span>
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
    </Link>
  );
}
