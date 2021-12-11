import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TContent } from '../../@types';
import {
  HorizontalContentBox,
  CarouselContainer,
  VerticalContentBox,
} from '../../component';
import { getPosts, getReviews } from '../../DB';
import { TRootState } from '../../store';
import { cacheContents } from '../../store/contentSlice';

export function HomePage() {
  const { reviews, posts } = useSelector((state: TRootState) => state.content);
  const dispatch = useDispatch();

  const loadContents = useCallback(async () => {
    if (reviews.length && posts.length) {
      return;
    }

    const reviewList: TContent[] = [];
    const postList: TContent[] = [];
    const [reviewSnap, postSnap] = await Promise.all([
      getReviews(5),
      getPosts(5),
    ]);

    reviewSnap.forEach((doc) => {
      reviewList.push(doc.data() as TContent);
    });
    postSnap.forEach((doc) => {
      postList.push(doc.data() as TContent);
    });
    dispatch(cacheContents({ posts: postList, reviews: reviewList }));
  }, [dispatch, posts, reviews]);

  useEffect(() => {
    loadContents();
  }, [loadContents]);

  return (
    <>
      <CarouselContainer title="HOT" contents={reviews} />
      <HorizontalContentBox title="Post" contents={posts} />
      <VerticalContentBox title="Review" contents={reviews} />
    </>
  );
}
