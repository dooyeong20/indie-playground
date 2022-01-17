import React from 'react';
import styles from './CarouselContainer.module.css';
import { cls } from '../../util';
import { Carousel } from '..';

interface IProps {
  title?: string;
  contents: string[];
}

export function CarouselContainer({ contents, title }: IProps) {
  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>{title || ''}</h2>
      <Carousel imgSrcList={contents} />
    </div>
  );
}

// TODO: 모바일 스와이프 feature
