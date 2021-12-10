import React from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import _ from 'lodash';
import { cls } from '../../util';
import styles from './Rating.module.css';

interface IProps {
  rating: number;
}

export function Rating({ rating }: IProps) {
  return (
    <div className={cls(styles.rating)}>
      {[1, 2, 3, 4, 5].map((num) =>
        num <= rating ? (
          <IoStar key={_.uniqueId('rating')} />
        ) : (
          <IoStarOutline key={_.uniqueId('rating')} />
        )
      )}
    </div>
  );
}
