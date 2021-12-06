import React from 'react';
import { VContent } from '..';
import { cls } from '../../util';
import styles from './HorizontalContentBox.module.css';

interface IProps {
  title: string;
  items: string[];
}

export function HorizontalContentBox({ title, items }: IProps) {
  return (
    <div className={cls(styles.container)}>
      <div className={cls(styles.header)}>
        <h2>{title}</h2>
        <div role="button" className={cls(styles.more)}>
          더보기 +
        </div>
      </div>
      <div className={cls(styles.contentBox)}>
        {items.map((imgPath) => (
          <VContent key={imgPath} imgPath={imgPath} />
        ))}
      </div>
    </div>
  );
}
