import React, { useEffect, useState } from 'react';
import {
  arrayUnion,
  DocumentData,
  QuerySnapshot,
  updateDoc,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uidv4 } from 'uuid';
import { TComment, TContent } from '../../@types';
import {
  CarouselContainer,
  CommentContainer,
  DetailTextContent,
  Loading,
} from '../../component';
import { addComment, getCommentList, getDetail } from '../../DB';
import { TRootState } from '../../store';

type TDetailPageParam = 'id' | 'category';

export function DetailPage() {
  const [content, setContent] = useState<TContent | null>(null);
  const [commentList, setCommentList] = useState<TComment[]>([]);
  const [detailSnap, setDetailSnap] = useState<
    QuerySnapshot<DocumentData> | undefined
  >();
  const { id, category } = useParams<TDetailPageParam>();
  const user = useSelector((state: TRootState) => state.user);

  const loadContent = async (category: string, id: string) => {
    const snapshot = await getDetail(category, id);
    const detailContent = snapshot?.docs[0].data() as TContent;
    const comments = await getCommentList(detailContent);

    setDetailSnap(snapshot);
    setCommentList(comments);
    setContent(detailContent);
  };

  const handleSubmitWrite = async (comment: string) => {
    const doc = detailSnap?.docs[0];

    console.log(user.email);
    console.log(comment);

    if (!doc) {
      console.error('document find error !');
      return;
    }

    setCommentList([
      {
        author: user.email,
        content: comment,
        created: Date.now(),
        id: uidv4(),
        rating: 5,
      },
      ...commentList,
    ]);

    const commentRef = await addComment({
      id: uidv4(),
      author: user.email,
      content: comment,
      created: Date.now(),
      rating: 5,
    });

    await updateDoc(doc.ref, {
      comments: arrayUnion(commentRef),
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
      <CommentContainer
        commentList={commentList}
        onSubmitWrite={handleSubmitWrite}
      />
    </>
  );
}
