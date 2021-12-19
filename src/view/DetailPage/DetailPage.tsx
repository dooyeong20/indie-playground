import React from 'react';
import { useParams } from 'react-router-dom';
import { EContentType } from '../../@types';
import {
  CarouselContainer,
  CommentContainer,
  DetailTextContent,
} from '../../component';

type TDetailPageParam = 'id';

export function DetailPage() {
  const { id } = useParams<TDetailPageParam>();

  return (
    <>
      <CarouselContainer
        contents={[
          {
            id: '11',
            title: 'tmp title',
            type: EContentType.post,
            mainImagePath:
              'https://i.ytimg.com/vi/HtOGr6vr9eU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZ2b8vMOexjPBY9ypp-iF9HOf69Q',
          },
          {
            id: '12',
            title: 'tmp title',
            type: EContentType.post,
            mainImagePath:
              'https://i.ytimg.com/vi/cxfyPzjNxLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFMUjZYSaUqHNZusqFUWhPSegPFg',
          },
        ]}
      />
      <DetailTextContent
        title="임시 타이틀"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eveniet hic culpa, deleniti rem maiores, vero ullam, beatae minus repellat odio ab accusantium quas deserunt dolore temporibus minima voluptate modi."
      />
      <CommentContainer />
    </>
  );
}
