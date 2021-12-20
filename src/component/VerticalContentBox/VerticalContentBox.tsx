import _ from 'lodash';
import React from 'react';
import { HContent } from '..';
import { TContent } from '../../@types';
import { cls } from '../../util';
import styles from './VerticalContentBox.module.css';

interface IProps {
  title: string;
  contents: TContent[];
}

export function VerticalContentBox({ title, contents }: IProps) {
  return (
    <div className={cls(styles.container)}>
      <div className={cls(styles.header)}>
        <h2 className={cls(styles.title)}>{title}</h2>
        <div role="button" className={cls(styles.more)}>
          더보기 +
        </div>
      </div>
      <div className={cls(styles.contentBox)}>
        {contents.slice(0, 10).map((item) => (
          <HContent
            key={_.uniqueId()}
            id={item.id}
            type={item.type}
            imgPath={item.mainImagePath}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
