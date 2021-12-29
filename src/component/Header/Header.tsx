import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EPage, EUserStatus, EViewMode } from '../../@types';
import { TRootState } from '../../store';
import { logout } from '../../store/userSlice';
import { cls } from '../../util';
import styles from './Header.module.css';
import { MobileNavigation } from '..';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export function Header() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const user = useSelector((state: TRootState) => state.user);
  const { viewMode, currentPage } = useSelector(
    (state: TRootState) => state.app
  );
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickOpenNav = () => {
    setisNavOpen(true);
  };
  const handleClickCloseNav = () => {
    setisNavOpen(false);
  };
  const handleClickSignIn = () => {
    handleClickCloseNav();
  };
  const handleClickSignOut = () => {
    signOut(auth);
    dispatch(logout());
    handleClickCloseNav();
    navigate('/');
  };
  const isGuest = () => user.status === EUserStatus.guest;
  const isCurrentPageActive = (page: EPage) => page === currentPage;
  const mobileNavOpened = viewMode !== EViewMode.desktop && isNavOpen;

  return (
    <header className={cls(styles.container)}>
      <NavLink to="/" className={cls(styles.logo)}>
        <span className={cls(styles.highlight)}>INDIE</span> Playground
      </NavLink>
      <nav className={cls(styles.navList)}>
        <NavLink
          to="/"
          className={({ isActive }) => cls(isActive ? styles.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => cls(isActive ? styles.active : '')}
        >
          Post
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) => cls(isActive ? styles.active : '')}
        >
          Review
        </NavLink>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            cls(
              isGuest() ? styles.sign : styles.hidden,
              isActive ? styles.active : ''
            )
          }
          onClick={handleClickSignIn}
        >
          Sign In
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            cls(
              isGuest() ? styles.sign : styles.hidden,
              isActive ? styles.active : ''
            )
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) =>
            cls(
              isGuest() ? styles.hidden : styles.sign,
              isActive ? styles.active : ''
            )
          }
        >
          My Page
        </NavLink>
        <a
          href="#"
          className={cls(
            isGuest() ? styles.hidden : styles.sign,
            isCurrentPageActive(EPage.signIn) ? styles.active : ''
          )}
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
        isOpen={mobileNavOpened}
        isGuest={isGuest()}
        currentPage={currentPage}
        onClickCloseNav={handleClickCloseNav}
        onClickSignIn={handleClickSignIn}
        onClickSignOut={handleClickSignOut}
      />
    </header>
  );
}
