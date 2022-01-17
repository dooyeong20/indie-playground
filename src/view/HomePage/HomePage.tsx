import React, { useCallback, useEffect, useState } from 'react';
import { EContentType, TContent } from '../../@types';
import {
  HorizontalContentBox,
  CarouselContainer,
  VerticalContentBox,
} from '../../component';
import { getPosts, getReviews } from '../../DB';

export function HomePage() {
  const [posts, setPosts] = useState<TContent[]>([]);
  const [reviews, setReviews] = useState<TContent[]>([]);

  const loadContents = useCallback(async () => {
    const reviewList: TContent[] = [];
    const postList: TContent[] = [];
    const [reviewSnap, postSnap] = await Promise.all([
      getReviews(5),
      getPosts(5),
    ]);

    reviewSnap?.forEach((doc) => {
      reviewList.push(doc.data() as TContent);
    });
    postSnap?.forEach((doc) => {
      postList.push(doc.data() as TContent);
    });
    setPosts(postList);
    setReviews(reviewList);
  }, []);

  useEffect(() => {
    loadContents();
  }, [loadContents]);

  return (
    <>
      <CarouselContainer
        title="HOT"
        contents={reviews.map((review) => review.mainImagePath)}
      />
      <HorizontalContentBox title={EContentType.post} contents={posts} />
      <VerticalContentBox title={EContentType.review} contents={reviews} />
    </>
  );
}
