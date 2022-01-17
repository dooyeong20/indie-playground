import React, { useState } from 'react';
import { Rating } from '..';
import { TComment } from '../../@types';
import { cls } from '../../util';
import styles from './CommentContainer.module.css';

interface IProps {
  onSubmitWrite: (comment: string) => void;
  commentList: TComment[];
}

export function CommentContainer({ commentList, onSubmitWrite }: IProps) {
  const [comment, setComment] = useState<string>('');

  const handleWrite = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onSubmitWrite(comment);
    setComment('');
  };

  return (
    <>
      <div className={cls(styles.container)}>
        <h2 className={cls(styles.title)}>댓글</h2>
        <div className={cls(styles.commentInput)}>
          <form action="#" className={cls(styles.textForm)}>
            <textarea
              name="comment"
              id="comment"
              value={comment}
              className={cls(styles.textArea)}
              onChange={handleWrite}
            />
          </form>
          <button
            type="submit"
            className={cls(styles.button)}
            onClick={handleSubmit}
          >
            쓰기
          </button>
        </div>
        {commentList.map(({ author, content, created, rating, id }) => (
          <div key={id} className={cls(styles.commentBox)}>
            <div className={cls(styles.commentDetail)}>
              <span className={cls(styles.authorName)}>{author}</span>
              <span className={cls(styles.date)}>
                {new Date(created).toLocaleString()}
              </span>
            </div>
            <Rating rating={rating} />
            <p className={cls(styles.commentText)}>{content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
