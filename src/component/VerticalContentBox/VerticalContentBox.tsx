import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { HContent } from '..';
import { TContent } from '../../@types';
import { fetchReviews } from '../../MockDB/reviews';
import { cls } from '../../util';
import styles from './VerticalContentBox.module.css';

interface IProps {
  title: string;
}

export function VerticalContentBox({ title }: IProps) {
  const [contents, setContents] = useState<TContent[]>([]);

  const loadContents = async () => {
    const contents = await fetchReviews();
    setContents(contents);
  };

  useEffect(() => {
    loadContents();
  }, []);

  return (
    <div>
      <div className={cls(styles.header)}>
        <h2 className={cls(styles.title)}>{title}</h2>
        <div role="button" className={cls(styles.more)}>
          더보기 +
        </div>
      </div>
      <div className={cls(styles.contentBox)}>
        {contents.map((item) => (
          <HContent key={_.uniqueId()} imgPath={item.mainImagePath} />
        ))}
      </div>
    </div>
  );
}
