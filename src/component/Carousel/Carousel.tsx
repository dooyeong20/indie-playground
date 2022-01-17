import React, { useCallback, useState } from 'react';
import { throttle, uniqueId } from 'lodash';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Loading } from '..';
import { cls } from '../../util';
import styles from './Carousel.module.css';

interface IProps {
  imgSrcList: string[];
}

export function Carousel({ imgSrcList }: IProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleClickIndicator = (idx: number) => () => setCarouselIndex(idx);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePrev = useCallback(
    throttle(() => {
      setCarouselIndex(
        (idx) => (idx + imgSrcList.length - 1) % imgSrcList.length
      );
    }, 300),
    [imgSrcList]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = useCallback(
    throttle(() => {
      setCarouselIndex((idx) => (idx + 1) % imgSrcList.length);
    }, 300),
    [imgSrcList]
  );

  return (
    <div className={cls(styles.carousel)}>
      <div
        className={cls(styles.imageBox)}
        style={{
          width: `${imgSrcList.length || 1}00%`,
          transform: `translateX(calc(100% / ${imgSrcList.length} * -1 * ${carouselIndex}))`,
        }}
      >
        {!imgSrcList.length ? (
          <Loading />
        ) : (
          imgSrcList.map((src) => (
            <img
              key={uniqueId()}
              src={src}
              alt="이미지"
              className={cls(styles.image)}
              style={{
                width: `calc(100% / ${imgSrcList.length})`,
              }}
              loading="lazy"
            />
          ))
        )}
      </div>
      <div className={cls(styles.indicatorContainer)}>
        {imgSrcList.map((_, idx) => (
          <div
            key={uniqueId()}
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
  );
}
