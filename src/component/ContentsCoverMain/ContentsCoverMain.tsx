import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { VContent } from '..';
import { EPage, TContent } from '../../@types';
import { TRootState } from '../../store';
import { cls } from '../../util';
import styles from './ContentsCoverMain.module.css';
import { getPosts, getReviews } from '../../DB';

export function ContentsCoverMain() {
  const [contents, setContents] = useState<TContent[]>([]);
  const pageType = useSelector((state: TRootState) => state.app.currentPage);

  const loadContents = async (pageType: EPage) => {
    const snapshot =
      pageType === EPage.post
        ? await getPosts(5)
        : EPage.review
        ? await getReviews(5)
        : null;
    const list: TContent[] = [];

    snapshot?.docs.forEach((doc) => {
      list.push(doc.data() as TContent);
    });

    setContents(list);
  };

  useEffect(() => {
    loadContents(pageType);
  }, [pageType]);

  return (
    <div className={cls(styles.container)}>
      {contents.map((item) => (
        <div
          key={_.uniqueId(pageType)}
          className={cls(styles.contentContainer)}
        >
          <VContent
            id={item.id}
            type={item.type}
            imgPath={item.mainImagePath}
            content={item.content}
          />
        </div>
      ))}
    </div>
  );
}
