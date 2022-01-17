import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TContent } from '../../@types';
import {
  CarouselContainer,
  CommentContainer,
  DetailTextContent,
  Loading,
} from '../../component';
import { getDetail } from '../../DB';

type TDetailPageParam = 'id' | 'category';

export function DetailPage() {
  const [content, setContent] = useState<TContent | null>(null);
  const { id, category } = useParams<TDetailPageParam>();

  const loadContent = async (category: string, id: string) => {
    const snapshot = await getDetail(category, id);
    snapshot?.docs.forEach((doc) => {
      setContent(doc.data() as TContent);
    });
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    loadContent(category!, id!);
  }, [id, category]);

  if (!content) {
    return <Loading />;
  }

  return (
    <>
      <CarouselContainer contents={content.imagePaths} />
      <DetailTextContent title={content.title} text={content.content} />
      <CommentContainer />
    </>
  );
}
