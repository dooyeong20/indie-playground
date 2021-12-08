import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EUserStatus, EViewMode } from '../../@types';
import { TRootState } from '../../store';
import { loginUser, logout } from '../../store/userSlice';
import { cls } from '../../util';
import styles from './Header.module.css';
import { MobileNavigation } from '..';

export function Header() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const user = useSelector((state: TRootState) => state.user);
  const viewMode = useSelector((state: TRootState) => state.app.viewMode);
  const dispatch = useDispatch();
  const handleClickSignIn = () => {
    dispatch(loginUser({ status: EUserStatus.member, userName: 'test user' }));
  };
  const handleClickSignOut = () => {
    dispatch(logout());
  };
  const handleClickOpenNav = () => {
    setisNavOpen(true);
  };
  const handleClickCloseNav = () => {
    setisNavOpen(false);
  };
  const isGuest = () => user.status === EUserStatus.guest;

  return (
    <header className={cls(styles.container)}>
      <a href="#" className={cls(styles.logo)}>
        <span className={cls(styles.highlight)}>INDIE</span> Playground
      </a>
      <nav className={cls(styles.navList)}>
        <a href="#" className={cls(styles.active)}>
          Home
        </a>
        <a href="#">Post</a>
        <a href="#">Review</a>
        <a
          href="#"
          className={cls(isGuest() ? styles.sign : styles.hidden)}
          onClick={handleClickSignIn}
        >
          Sign In
        </a>
        <a href="#" className={cls(isGuest() ? styles.sign : styles.hidden)}>
          Sign Up
        </a>
        <a href="#" className={cls(isGuest() ? styles.hidden : styles.sign)}>
          My Page
        </a>
        <a
          href="#"
          className={cls(isGuest() ? styles.hidden : styles.sign)}
          onClick={handleClickSignOut}
        >
          Sign Out
        </a>
      </nav>
      <div
        role="button"
        className={cls(styles.navButton)}
        onClick={handleClickOpenNav}
      >
        <div className={cls(styles.line)}></div>
        <div className={cls(styles.line)}></div>
        <div className={cls(styles.line)}></div>
      </div>
      <MobileNavigation
        isOpen={viewMode !== EViewMode.desktop && isNavOpen}
        isGuest={isGuest()}
        onClickCloseNav={handleClickCloseNav}
        onClickSignIn={handleClickSignIn}
        onClickSignOut={handleClickSignOut}
      />
    </header>
  );
}
