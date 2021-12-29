import React, { useEffect, useLayoutEffect } from 'react';
import * as _ from 'lodash';
import { ContentsCoverPage, DetailPage, HomePage, MyPage } from './view';
import { useDispatch } from 'react-redux';
import { changeToDesktopView, changeToMobileView } from './store/appSlice';
import { Footer, Header } from './component';
import { cls } from './util';
import styles from './App.module.css';
import { EPage, EUserStatus } from './@types';
import { Route, Routes } from 'react-router';
import SigninPage from './view/SigninPage/SigninPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginUser } from './store/userSlice';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const { displayName, email } = user;
        dispatch(
          loginUser({
            status: EUserStatus.member,
            displayName: displayName ?? 'no name',
            email: email ?? 'no email',
          })
        );
      } else {
        // not signed in
        console.log('not signed in');
      }
    });
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(
      window.innerWidth < 800 ? changeToMobileView() : changeToDesktopView()
    );
    const handleResize = _.throttle(() => {
      const innerWidth = window.innerWidth;
      dispatch(innerWidth < 800 ? changeToMobileView() : changeToDesktopView());
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={cls(styles.mainContainer)}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/posts"
            element={<ContentsCoverPage pageType={EPage.post} />}
          />
          <Route
            path="/reviews"
            element={<ContentsCoverPage pageType={EPage.review} />}
          />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/detail/:category/:id" element={<DetailPage />} />
          <Route path="*" element={<h1>Wrong Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
