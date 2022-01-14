import React from 'react';
import { Link } from 'react-router-dom';
import { EContentType } from '../../@types';
import { cls } from '../../util';
import styles from './VContent.module.css';

interface IProps {
  id: string;
  type: EContentType;
  imgPath: string;
  content: string;
}

export function VContent({ id, type, imgPath, content }: IProps) {
  return (
    <Link to={`/detail/${type}/${id}`} className={cls(styles.container)}>
      <picture className={cls(styles.pictureBox)}>
        <img
          src={imgPath}
          alt="임시 이미지 alt"
          className={cls(styles.imageBox)}
        />
      </picture>
      <p className={cls(styles.detail)}>{content}</p>
    </Link>
  );
}
