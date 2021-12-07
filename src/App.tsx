import React, { useLayoutEffect } from 'react';
import * as _ from 'lodash';
import { HomePage } from './view/HomePage';
import { useDispatch } from 'react-redux';
import { changeToDesktopView, changeToMobileView } from './store/appSlice';

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

  return <HomePage />;
}
