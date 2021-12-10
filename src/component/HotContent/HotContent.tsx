import React, { useCallback, useEffect, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import _ from 'lodash';
import styles from './HotContent.module.css';
import { cls } from '../../util';
import { TContent } from '../../@types';
import { fetchHotContents } from '../../MockDB/hotContents';
import { Loading } from '..';

export function HotContent() {
  const [contents, setContents] = useState<TContent[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const loadHotContents = async () => {
    const contents = await fetchHotContents();
    setContents(contents);
  };

  const handleClickIndicator = (idx: number) => () => setCarouselIndex(idx);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePrev = useCallback(
    _.throttle(() => {
      setCarouselIndex((idx) => (idx + contents.length - 1) % contents.length);
    }, 300),
    [contents]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = useCallback(
    _.throttle(() => {
      setCarouselIndex((idx) => (idx + 1) % contents.length);
    }, 300),
    [contents]
  );
  useEffect(() => {
    loadHotContents();
  }, []);

  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>hot</h2>
      <div className={cls(styles.carousel)}>
        <div
          className={cls(styles.imageBox)}
          style={{
            width: `${contents.length || 1}00%`,
            transform: `translateX(calc(100% / ${contents.length} * -1 * ${carouselIndex}))`,
          }}
        >
          {!contents.length ? (
            <Loading />
          ) : (
            contents.map((item) => (
              <img
                key={_.uniqueId()}
                src={item.mainImagePath}
                alt="이미지"
                className={cls(styles.image)}
                style={{
                  width: `calc(100% / ${contents.length})`,
                }}
                loading="lazy"
              />
            ))
          )}
        </div>
        <div className={cls(styles.indicatorContainer)}>
          {contents.map((item, idx) => (
            <div
              key={item.id}
              className={cls(
                styles.indicator,
                idx === carouselIndex ? styles.active : ''
              )}
              onClick={handleClickIndicator(idx)}
            />
          ))}
        </div>
        <div
          role="button"
          className={cls(styles.btn, styles.prevButton)}
          onClick={handlePrev}
        >
          <IoChevronBackOutline />
        </div>
        <div
          role="button"
          className={cls(styles.btn, styles.nextButton)}
          onClick={handleNext}
        >
          <IoChevronForwardOutline />
        </div>
      </div>
    </div>
  );
}

// TODO: 모바일 스와이프 feature
