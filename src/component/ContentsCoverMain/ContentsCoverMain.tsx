import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { VContent } from '..';
import { EPage, TContent } from '../../@types';
import { fetchPosts } from '../../MockDB/posts';
import { fetchReviews } from '../../MockDB/reviews';
import { TRootState } from '../../store';
import { cls } from '../../util';
import styles from './ContentsCoverMain.module.css';

export function ContentsCoverMain() {
  const [contents, setContents] = useState<TContent[]>([]);
  const pageType = useSelector((state: TRootState) => state.app.currentPage);

  useEffect(() => {
    const loadContents = async () => {
      const contents =
        pageType === EPage.review ? await fetchReviews() : await fetchPosts();
      setContents(contents);
    };

    loadContents();
  }, [pageType]);

  return (
    <div className={cls(styles.container)}>
      {contents.map((item) => (
        <div
          key={_.uniqueId(pageType)}
          className={cls(styles.contentContainer)}
        >
          <VContent imgPath={item.mainImagePath} />
        </div>
      ))}
    </div>
  );
}
