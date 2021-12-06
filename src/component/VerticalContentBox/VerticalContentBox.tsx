import React from 'react';
import { HContent } from '..';
import { cls } from '../../util';
import styles from './VerticalContentBox.module.css';

interface IProps {
  title: string;
  items: string[];
}

export function VerticalContentBox({ title, items }: IProps) {
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
          <HContent key={imgPath} imgPath={imgPath} />
        ))}
      </div>
    </div>
  );
}
