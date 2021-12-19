import React, { useLayoutEffect } from 'react';
import * as _ from 'lodash';
import { ContentsCoverPage, DetailPage, HomePage } from './view';
import { useDispatch } from 'react-redux';
import { changeToDesktopView, changeToMobileView } from './store/appSlice';
import { Footer, Header } from './component';
import { cls } from './util';
import styles from './App.module.css';
import { EPage } from './@types';
import { Route, Routes } from 'react-router';

export function App() {
  const dispatch = useDispatch();
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
          <Route path="/detail/:category/:id" element={<DetailPage />} />
          <Route path="*" element={<h1>Wrong Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
