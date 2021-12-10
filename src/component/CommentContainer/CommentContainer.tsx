import React from 'react';
import { Rating } from '..';
import { cls } from '../../util';
import styles from './CommentContainer.module.css';

export function CommentContainer() {
  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>댓글</h2>
      <div className={cls(styles.commentInput)}>
        <form action="#" className={cls(styles.textForm)}>
          <textarea
            name="comment"
            id="comment"
            className={cls(styles.textArea)}
          />
        </form>
        <button type="submit" className={cls(styles.button)}>
          쓰기
        </button>
      </div>
      <div className={cls(styles.commentBox)}>
        <div className={cls(styles.commentDetail)}>
          <span className={cls(styles.authorName)}>Ariana Katelin</span>
          <span className={cls(styles.date)}>2021. 11. 21</span>
        </div>
        <Rating rating={4} />
        <p className={cls(styles.commentText)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          nam!
        </p>
      </div>
      <div className={cls(styles.commentBox)}>
        <div className={cls(styles.commentDetail)}>
          <span className={cls(styles.authorName)}>Ariana Katelin</span>
          <span className={cls(styles.date)}>2021. 11. 21</span>
        </div>
        <Rating rating={3} />
        <p className={cls(styles.commentText)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          nam!
        </p>
      </div>
    </div>
  );
}
