import React from 'react';
import { Link } from 'react-router-dom';
import { EContentType } from '../../@types';
import { cls } from '../../util';
import styles from './HContent.module.css';

interface IProps {
  id: string;
  imgPath: string;
  title: string;
  type: EContentType;
}

export function HContent({ id, type, imgPath, title }: IProps) {
  return (
    <Link to={`detail/${type}/${id}`} className={cls(styles.container)}>
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
