import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TRootState } from '../../store';
import { VContent } from '..';
import { EContentType, EViewMode, TContent } from '../../@types';
import { cls } from '../../util';
import styles from './HorizontalContentBox.module.css';
import { Link } from 'react-router-dom';

interface IProps {
  title: EContentType;
  contents: TContent[];
}

export function HorizontalContentBox({ title, contents }: IProps) {
  const viewMode = useSelector((state: TRootState) => state.app.viewMode);

  return (
    <div className={cls(styles.container)}>
      <div className={cls(styles.header)}>
        <h2 className={cls(styles.title)}>{title}</h2>
        <Link
          to={
            title === EContentType.post
              ? '/posts'
              : title === EContentType.review
              ? '/reviews'
              : ''
          }
          className={cls(styles.more)}
        >
          더보기 +
        </Link>
      </div>
      <div className={cls(styles.contentBox)}>
        {contents
          .slice(0, viewMode === EViewMode.mobile ? 3 : 5)
          .map((item) => (
            <VContent
              key={_.uniqueId()}
              id={item.id}
              type={item.type}
              imgPath={item.mainImagePath}
            />
          ))}
      </div>
    </div>
  );
}
