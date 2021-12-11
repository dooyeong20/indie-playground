import React, { useEffect, useState } from 'react';
import { TContent } from '../../@types';
import {
  HorizontalContentBox,
  CarouselContainer,
  VerticalContentBox,
} from '../../component';
import { getPosts, getReviews } from '../../DB';

export function HomePage() {
  const [reviews, setReviews] = useState<TContent[]>([]);
  const [posts, setPosts] = useState<TContent[]>([]);

  const loadContents = async () => {
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
    setReviews(reviewList);
    setPosts(postList);
  };

  useEffect(() => {
    loadContents();
  }, []);

  return (
    <>
      <CarouselContainer title="HOT" contents={reviews} />
      <HorizontalContentBox title="Post" contents={posts} />
      <VerticalContentBox title="Review" contents={reviews} />
    </>
  );
}
