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
  content: string;
}

export function HContent({ id, type, imgPath, title, content }: IProps) {
  return (
    <Link to={`/detail/${type}/${id}`} className={cls(styles.container)}>
      <div className={cls(styles.imageBox)}>
        <img src={imgPath} alt="앱 이미지" className={cls(styles.image)} />
      </div>
      <div className={cls(styles.detail)}>
        <span className={cls(styles.title)}>{title}</span>
        <span className={cls(styles.rating)}>9.6 / 10</span>
        <span className={cls(styles.review)}>
          {content?.slice(0, 50) ?? '' + '...'}
        </span>
      </div>
    </Link>
  );
}
