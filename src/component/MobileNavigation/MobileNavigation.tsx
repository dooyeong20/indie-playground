import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { EPage } from '../../@types';
import { cls } from '../../util';
import styles from './MobileNavigation.module.css';

interface IProps {
  isOpen: boolean;
  isGuest: boolean;
  currentPage: EPage;
  onClickSignIn: () => void;
  onClickSignOut: () => void;
  onClickCloseNav: () => void;
}

export function MobileNavigation({
  isGuest,
  isOpen,
  onClickSignIn,
  onClickSignOut,
  onClickCloseNav,
}: IProps) {
  return (
    <>
      {isOpen && (
        <div onClick={onClickCloseNav} className={cls(styles.backdrop)} />
      )}
      <nav
        className={cls(
          styles.mobileNav,
          !isOpen ? styles.notOpen : styles.open
        )}
      >
        <NavLink onClick={onClickCloseNav} to="/" className={cls(styles.logo)}>
          <span className={cls(styles.highlight)}>INDIE</span> Playground
        </NavLink>
        <ul className={cls(styles.mobileNavItemContainer)}>
          <li>
            <NavLink
              onClick={onClickCloseNav}
              to="/"
              className={({ isActive }) =>
                cls(styles.mobileNavItem, isActive ? styles.active : '')
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={onClickCloseNav}
              to="posts"
              className={({ isActive }) =>
                cls(styles.mobileNavItem, isActive ? styles.active : '')
              }
            >
              Post
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={onClickCloseNav}
              to="/reviews"
              className={({ isActive }) =>
                cls(styles.mobileNavItem, isActive ? styles.active : '')
              }
            >
              Review
            </NavLink>
          </li>
          <li className={isGuest ? styles.hidden : ''}>
            <NavLink
              onClick={onClickCloseNav}
              to="/write"
              className={({ isActive }) =>
                cls(styles.mobileNavItem, isActive ? styles.active : '')
              }
            >
              Write
            </NavLink>
          </li>
          <li className={isGuest ? styles.hidden : ''}>
            <NavLink
              onClick={onClickCloseNav}
              to="/mypage"
              className={({ isActive }) =>
                cls(styles.mobileNavItem, isActive ? styles.active : '')
              }
            >
              My Page
            </NavLink>
          </li>
          <li className={isGuest ? '' : styles.hidden}>
            <NavLink
              to="signin"
              className={({ isActive }) =>
                cls(
                  styles.mobileNavItem,
                  isGuest ? styles.sign : styles.hidden,
                  isActive ? styles.active : ''
                )
              }
              onClick={onClickSignIn}
            >
              Sign In
            </NavLink>
          </li>
          <li className={isGuest ? '' : styles.hidden}>
            <NavLink
              onClick={onClickCloseNav}
              to="signup"
              className={({ isActive }) =>
                cls(
                  styles.mobileNavItem,
                  isGuest ? styles.sign : styles.hidden,
                  isActive ? styles.active : ''
                )
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li className={isGuest ? styles.hidden : ''}>
            <a
              href="#"
              className={cls(
                styles.mobileNavItem,
                isGuest ? styles.hidden : styles.sign
              )}
              onClick={onClickSignOut}
            >
              Sign Out
            </a>
          </li>
        </ul>
        <div
          role="button"
          className={cls(styles.navCloseButton)}
          onClick={onClickCloseNav}
        >
          <IoArrowForwardCircleOutline size="1.7rem" />
        </div>
      </nav>
    </>
  );
}
