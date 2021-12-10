import React, { useEffect, useState } from 'react';
import { TContent } from '../../@types';
import {
  HorizontalContentBox,
  CarouselContainer,
  VerticalContentBox,
} from '../../component';
import { fetchHotContents } from '../../MockDB/hotContents';

export function HomePage() {
  const [contents, setContents] = useState<TContent[]>([]);
  const loadHotContents = async () => {
    const contents = await fetchHotContents();
    setContents(contents);
  };

  useEffect(() => {
    loadHotContents();
  }, []);

  return (
    <>
      <CarouselContainer title="HOT" contents={contents} />
      <HorizontalContentBox title="Post" />
      <VerticalContentBox title="Review" />
    </>
  );
}
