import React, { useEffect } from 'react';
import { cls } from '../../util';
import styles from './WritePage.module.css';
import { BsStarFill, BsStar, BsPlus } from 'react-icons/bs';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store';
export function WritePage() {
  const user = useSelector((state: TRootState) => state.user);
  const imgRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<{ url: string; file: File }[]>([]);
  const [content, setContent] = useState<string>('');

  const handleFileSelect = () => {
    const files = imgRef.current?.files;
    if (!files) {
      return;
    }
    const imageList: { url: string; file: File }[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      imageList.push({ url, file });
    });
    setImages([...images, ...imageList]);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setContent(content);
  };

  const handleWrite = () => {
    console.log(user.displayName, user.email);
    console.log(content);
  };

  useEffect(() => {
    return () => {
      images.forEach(({ url }) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [images]);
  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.heading)}>새 글쓰기</h2>
      <div className={cls(styles.catContainer)}>
        <span className={cls(styles.cat)}>카테고리</span>
        <div className={cls(styles.buttons)}>
          <div role="button" className={cls(styles.button, styles.active)}>
            post
          </div>
          <div role="button" className={cls(styles.button)}>
            review
          </div>
        </div>
      </div>
      <div className={cls(styles.catContainer)}>
        <span className={cls(styles.cat)}>평점</span>
        <div className={cls(styles.buttons)}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
        </div>
      </div>
      <div className={cls(styles.catContainer)}>
        <span className={cls(styles.cat)}>제목</span>
        <input type="text" className={cls(styles.inputTitle)} />
      </div>
      <div className={cls(styles.catContainer, styles.noflex)}>
        <span className={cls(styles.cat, styles.picTitle)}>사진</span>
        <div className={cls(styles.picContainer)}>
          <div
            className={cls(styles.scrollLongBox)}
            style={{
              width: `${
                130 * images.length + 20 * (images.length - 1) + 120
              }px`,
            }}
          >
            {images.map(({ url }) => (
              <div key={url} className={cls(styles.preview)}>
                <div className={cls(styles.imgWrapper)}>
                  <img
                    className={cls(styles.previewImg)}
                    src={url}
                    alt="업로드 이미지 미리보기"
                  />
                </div>
              </div>
            ))}
            <label htmlFor="img" className={cls(styles.fileUpload)}>
              <BsPlus style={{ width: '50px', height: '50px' }} />
            </label>
          </div>
        </div>
      </div>
      <div className={cls(styles.catContainer, styles.noflex)}>
        <span className={cls(styles.cat, styles.picTitle)}>내용</span>
        <textarea
          className={cls(styles.contentArea)}
          name="content"
          id="content"
          onChange={handleContentChange}
        />
      </div>
      <input
        ref={imgRef}
        type="file"
        name="img"
        id="img"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className={cls(styles.fileInput)}
      />
      <div
        className={cls(styles.writeButton)}
        role="button"
        onClick={handleWrite}
      >
        게시하기
      </div>
    </div>
  );
}
