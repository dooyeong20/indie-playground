import React, { useEffect } from 'react';
import { cls } from '../../util';
import styles from './WritePage.module.css';
import { BsStarFill, BsStar, BsPlus } from 'react-icons/bs';
import { useRef } from 'react';
import { useState } from 'react';
import { v4 as uid4 } from 'uuid';
import { useSelector } from 'react-redux';
import { v4 as uidv4 } from 'uuid';
import { TRootState } from '../../store';
import { EContentType, EViewMode } from '../../@types';
import {
  getDownloadURL,
  getStorage,
  ref,
  StorageReference,
  uploadBytes,
  UploadResult,
} from 'firebase//storage';
import { addContent } from '../../DB';
import { Loading } from '../../component';

export function WritePage() {
  const user = useSelector((state: TRootState) => state.user);
  const viewMode = useSelector((state: TRootState) => state.app.viewMode);
  const imgRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<{ url: string; file: File }[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<EContentType>(EContentType.post);
  const [starCnt, setStarCnt] = useState(0);
  const [loadingWrite, setLoadingWrite] = useState<boolean>(false);

  const imgWidth = viewMode === EViewMode.mobile ? 130 : 250;

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

  const handleWrite = async () => {
    setLoadingWrite(true);
    console.log('----- NEW WRITE ------');
    console.log(user.displayName, user.email);
    console.log(title);
    console.log(content);

    const storage = getStorage();

    try {
      const imgRefList: StorageReference[] = [];
      const uploadPromiseList: Promise<UploadResult>[] = [];

      images.forEach(async ({ file }) => {
        const uid = uid4().replaceAll(/-/g, '');
        const url = `${category}/${uid}`;
        const imgRef = ref(storage, url);
        uploadPromiseList.push(uploadBytes(imgRef, file));
        imgRefList.push(imgRef);
      });

      await Promise.all(uploadPromiseList);

      const urls = await Promise.all(
        imgRefList.map((iRef) => getDownloadURL(iRef))
      );

      await addContent({
        id: uidv4().replaceAll(/-/g, ''),
        authorEmail: user.email,
        imagePaths: urls,
        mainImagePath: urls[0],
        title,
        type: category,
        created: Date.now(),
        content,
        comments: [],
      });

      window.location.href = '/';
    } catch (e) {
      console.error(e);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleReviewCategory = () => {
    setCategory(EContentType.review);
  };

  const handlePostCategory = () => {
    setCategory(EContentType.post);
  };

  const handleStar = (idx: number) => () => {
    setStarCnt(idx);
  };

  useEffect(() => {
    return () => {
      images.forEach(({ url }) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [images]);

  return (
    <>
      <div className={cls(styles.container)}>
        <h2 className={cls(styles.heading)}>??? ?????????</h2>
        <div className={cls(styles.catContainer)}>
          <span className={cls(styles.cat)}>????????????</span>
          <div className={cls(styles.buttons)}>
            <div
              role="button"
              className={cls(
                styles.button,
                category === EContentType.post ? styles.active : ''
              )}
              onClick={handlePostCategory}
            >
              post
            </div>
            <div
              role="button"
              className={cls(
                styles.button,
                category === EContentType.review ? styles.active : ''
              )}
              onClick={handleReviewCategory}
            >
              review
            </div>
          </div>
        </div>
        <div className={cls(styles.catContainer)}>
          <span className={cls(styles.cat)}>??????</span>
          <div className={cls(styles.buttons)}>
            {[1, 2, 3, 4, 5].map((idx: number) =>
              idx <= starCnt ? (
                <BsStarFill
                  key={idx}
                  onClick={handleStar(idx)}
                  size={viewMode === EViewMode.mobile ? 16 : 24}
                />
              ) : (
                <BsStar
                  key={idx}
                  onClick={handleStar(idx)}
                  size={viewMode === EViewMode.mobile ? 16 : 24}
                />
              )
            )}
          </div>
        </div>
        <div className={cls(styles.catContainer)}>
          <span className={cls(styles.cat)}>??????</span>
          <input
            type="text"
            className={cls(styles.inputTitle)}
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div className={cls(styles.catContainer, styles.noflex)}>
          <span className={cls(styles.cat, styles.picTitle)}>??????</span>
          <div className={cls(styles.picContainer)}>
            <div
              className={cls(styles.scrollLongBox)}
              style={{
                width: `${
                  imgWidth * images.length + 20 * (images.length - 1) + 120
                }px`,
              }}
            >
              {images.map(({ url }) => (
                <div key={url} className={cls(styles.preview)}>
                  <div className={cls(styles.imgWrapper)}>
                    <img
                      className={cls(styles.previewImg)}
                      src={url}
                      alt="????????? ????????? ????????????"
                    />
                  </div>
                </div>
              ))}
              <label htmlFor="img" className={cls(styles.fileUpload)}>
                <BsPlus size={viewMode === EViewMode.mobile ? 50 : 100} />
              </label>
            </div>
          </div>
        </div>
        <div className={cls(styles.catContainer, styles.noflex)}>
          <span className={cls(styles.cat, styles.picTitle)}>??????</span>
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
          ????????????
        </div>
      </div>
      {loadingWrite && <Loading />}
    </>
  );
}
