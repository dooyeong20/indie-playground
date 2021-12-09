import React from 'react';
import { cls } from '../../util';
import styles from './ContentsCoverHeader.module.css';
import searchSVG from '../../assets/search.svg';

export function ContentsCoverHeader() {
  return (
    <div className={cls(styles.container)}>
      <div>
        <h2 className={cls(styles.category)}>Category</h2>
        <ul className={cls(styles.categoryList)}>
          <li className={cls(styles.categoryItem)}>롤플레잉</li>
          <li className={cls(styles.categoryItem)}>시뮬레이션</li>
          <li className={cls(styles.categoryItem)}>액션</li>
          <li className={cls(styles.categoryItem)}>+</li>
        </ul>
      </div>
      <form action="#" className={cls(styles.form)}>
        <label htmlFor="search" className={cls(styles.label)}>
          검색
        </label>
        <input
          type="text"
          name="search"
          placeholder="Search Games!"
          className={cls(styles.input)}
          style={{
            background: `center left 0 url(${searchSVG}) no-repeat`,
          }}
        />
      </form>
    </div>
  );
}
