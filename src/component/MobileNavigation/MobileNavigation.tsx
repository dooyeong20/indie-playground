import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
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
  currentPage,
  onClickSignIn,
  onClickSignOut,
  onClickCloseNav,
}: IProps) {
  return (
    <nav
      className={cls(styles.mobileNav, !isOpen ? styles.notOpen : styles.open)}
    >
      <a href="#" className={cls(styles.logo)}>
        <span className={cls(styles.highlight)}>INDIE</span> Playground
      </a>
      <ul className={cls(styles.mobileNavItemContainer)}>
        <li>
          <a
            href="#"
            className={cls(
              styles.mobileNavItem,
              currentPage === EPage.home ? styles.active : ''
            )}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={cls(
              styles.mobileNavItem,
              currentPage === EPage.post ? styles.active : ''
            )}
          >
            Post
          </a>
        </li>
        <li>
          <a
            href="#"
            className={cls(
              styles.mobileNavItem,
              currentPage === EPage.review ? styles.active : ''
            )}
          >
            Review
          </a>
        </li>
        <li className={isGuest ? styles.hidden : ''}>
          <a
            href="#"
            className={cls(
              styles.mobileNavItem,
              currentPage === EPage.myPage ? styles.active : ''
            )}
          >
            My Page
          </a>
        </li>
        <li className={isGuest ? '' : styles.hidden}>
          <a
            href="#"
            className={cls(
              styles.mobileNavItem,
              isGuest ? styles.sign : styles.hidden,
              currentPage === EPage.signIn ? styles.active : ''
            )}
            onClick={onClickSignIn}
          >
            Sign In
          </a>
        </li>
        <li className={isGuest ? '' : styles.hidden}>
          <a
            href="#"
            className={cls(
              styles.mobileNavItem,
              isGuest ? styles.sign : styles.hidden,
              currentPage === EPage.signUp ? styles.active : ''
            )}
          >
            Sign Up
          </a>
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
  );
}
