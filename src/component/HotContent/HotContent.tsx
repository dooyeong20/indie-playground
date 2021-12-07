import React, { useCallback, useEffect, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import * as _ from 'lodash';
import styles from './HotContent.module.css';
import { cls } from '../../util';

interface IProps {
  contents: string[];
}

export function HotContent({ contents }: IProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const isPrev = (idx: number) =>
    idx === carouselIndex + contents.length - (1 % contents.length);
  const isNext = (idx: number) => idx === (carouselIndex + 1) % contents.length;
  const getCarouselClass = (idx: number) =>
    carouselIndex === idx
      ? styles.show
      : isPrev(idx)
      ? styles.prev
      : isNext(idx)
      ? styles.next
      : '';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePrev = useCallback(
    _.throttle(() => {
      setCarouselIndex((idx) => (idx + contents.length - 1) % contents.length);
    }, 300),
    []
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = useCallback(
    _.throttle(() => {
      setCarouselIndex((idx) => (idx + 1) % contents.length);
    }, 300),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((idx) => (idx + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>hot</h2>
      <div className={cls(styles.carousel)}>
        <div
          className={cls(styles.imageBox)}
          style={{
            width: `${contents.length}00%`,
            transform: `translateX(calc(100% / ${contents.length} * -1 * ${carouselIndex}))`,
          }}
        >
          {contents.map((path, idx) => (
            <img
              key={path}
              src={path}
              alt="이미지"
              className={cls(styles.image, getCarouselClass(idx))}
              style={{
                width: `calc(100% / ${contents.length})`,
              }}
            />
          ))}
        </div>
        <div className={cls(styles.indicatorContainer)}>
          {contents.map((path, idx) => (
            <div
              key={path}
              className={cls(
                styles.indicator,
                idx === carouselIndex ? styles.active : ''
              )}
              onClick={() => setCarouselIndex(idx)}
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
