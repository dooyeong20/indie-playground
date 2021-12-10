import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TRootState } from '../../store';
import { VContent } from '..';
import { EViewMode, TContent } from '../../@types';
import { fetchPosts } from '../../MockDB/posts';
import { cls } from '../../util';
import styles from './HorizontalContentBox.module.css';

interface IProps {
  title: string;
}

export function HorizontalContentBox({ title }: IProps) {
  const [contents, setContents] = useState<TContent[]>([]);
  const viewMode = useSelector((state: TRootState) => state.app.viewMode);

  const loadContents = async () => {
    const contents = await fetchPosts();
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
        {contents
          .slice(0, viewMode === EViewMode.mobile ? 3 : 5)
          .map((item) => (
            <VContent key={_.uniqueId()} imgPath={item.mainImagePath} />
          ))}
      </div>
    </div>
  );
}
