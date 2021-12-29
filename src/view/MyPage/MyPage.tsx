import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { EContentType, TContent } from '../../@types';
import { VerticalContentBox } from '../../component';
import { getMyPosts, getMyReviews } from '../../DB';
import { TRootState } from '../../store';
import { cls } from '../../util';
import styles from './MyPage.module.css';

export function MyPage() {
  const [filter, setFilter] = useState<EContentType>(EContentType.all);
  const [posts, setPosts] = useState<TContent[]>([]);
  const [reviews, setReviews] = useState<TContent[]>([]);
  const { displayName, email } = useSelector((state: TRootState) => state.user);
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as EContentType);
  };

  const loadContent = async (email: string) => {
    const postList = await getMyPosts(email);
    const reviewList = await getMyReviews(email);
    setReviews(reviewList ?? []);
    setPosts(postList ?? []);
  };

  useEffect(() => {
    loadContent(email);
  }, [email]);

  return (
    <div className={cls(styles.container)}>
      <div className={cls(styles.userCard)}>
        <div className={cls(styles.userImage)}>
          <img
            src="https://avatars.githubusercontent.com/u/59571954?"
            alt="사용자 이미지"
          />
        </div>
        <div className={cls(styles.userDetail)}>
          <div className={cls(styles.detailContainer)}>
            <label className={cls(styles.label)} htmlFor="username">
              이름
            </label>
            <input
              className={cls(styles.input)}
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              readOnly
              value={displayName}
            />
          </div>
          <div className={cls(styles.detailContainer)}>
            <label className={cls(styles.label)} htmlFor="useremail">
              이메일
            </label>
            <input
              className={cls(styles.input)}
              type="email"
              name="useremail"
              id="useremail"
              readOnly
              value={email}
            />
          </div>
        </div>
      </div>
      <div className={cls(styles.myHeading)}>
        <h2 className={cls(styles.heading)}>내가 쓴 글</h2>
        <select
          name="filter"
          id="filter"
          className={cls(styles.filter)}
          onChange={handleFilterChange}
        >
          <option value={EContentType.all}>모두보기</option>
          <option value={EContentType.post}>포스트</option>
          <option value={EContentType.review}>리뷰</option>
        </select>
      </div>

      {filter === EContentType.post && (
        <VerticalContentBox title="Post" contents={posts} />
      )}
      {filter === EContentType.review && (
        <VerticalContentBox title="Review" contents={reviews} />
      )}
      {filter === EContentType.all && (
        <>
          <VerticalContentBox title="Post" contents={posts} />
          <VerticalContentBox title="Review" contents={reviews} />
        </>
      )}
    </div>
  );
}
