import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TContent } from '../../@types';
import {
  CarouselContainer,
  CommentContainer,
  DetailTextContent,
} from '../../component';
import { db } from '../../firebase-config';

type TDetailPageParam = 'id' | 'category';

export function DetailPage() {
  const [content, setContent] = useState<TContent | null>(null);
  const { id, category } = useParams<TDetailPageParam>();

  const getDetail = async (category: string, id: string) => {
    console.log('getting details ...');
    const q = query(collection(db, category), where('id', '==', id));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
      setContent(doc.data() as TContent);
    });
  };

  useEffect(() => {
    getDetail(category!, id!);
  }, [id, category]);

  if (!content) {
    return null;
  }

  return (
    <>
      <CarouselContainer contents={[content]} />
      <DetailTextContent
        title={content.title}
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eveniet hic culpa, deleniti rem maiores, vero ullam, beatae minus repellat odio ab accusantium quas deserunt dolore temporibus minima voluptate modi."
      />
      <CommentContainer />
    </>
  );
}
