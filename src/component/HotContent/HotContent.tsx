import React, { useEffect, useState } from 'react';
import styles from './HotContent.module.css';
import { cls } from '../../util';
import { TContent } from '../../@types';
import { fetchHotContents } from '../../MockDB/hotContents';
import { Carousel } from '..';

export function HotContent() {
  const [contents, setContents] = useState<TContent[]>([]);
  const loadHotContents = async () => {
    const contents = await fetchHotContents();
    setContents(contents);
  };

  useEffect(() => {
    loadHotContents();
  }, []);

  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>hot</h2>
      <Carousel contents={contents} />
    </div>
  );
}

// TODO: 모바일 스와이프 feature
