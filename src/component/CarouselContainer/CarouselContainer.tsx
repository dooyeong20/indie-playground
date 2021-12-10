import React from 'react';
import styles from './CarouselContainer.module.css';
import { cls } from '../../util';
import { Carousel } from '..';
import { TContent } from '../../@types';

interface IProps {
  title: string;
  contents: TContent[];
}

export function CarouselContainer({ contents, title }: IProps) {
  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>{title}</h2>
      <Carousel contents={contents} />
    </div>
  );
}

// TODO: 모바일 스와이프 feature
