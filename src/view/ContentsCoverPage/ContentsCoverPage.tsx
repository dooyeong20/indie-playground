import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EPage } from '../../@types';
import { ContentsCoverHeader, ContentsCoverMain } from '../../component';
import { changePageTo } from '../../store/appSlice';

interface IProps {
  pageType: EPage;
}

export function ContentsCoverPage({ pageType }: IProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePageTo(pageType));
  }, [dispatch, pageType]);
  return (
    <>
      <ContentsCoverHeader />
      <ContentsCoverMain />
    </>
  );
}
