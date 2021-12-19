import React from 'react';
import { Link } from 'react-router-dom';
import { cls } from '../../util';
import styles from './VContent.module.css';

interface IProps {
  id: string;
  imgPath: string;
}

export function VContent({ id, imgPath }: IProps) {
  return (
    <Link to={`/detail/${id}`} className={cls(styles.container)}>
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
    </Link>
  );
}
