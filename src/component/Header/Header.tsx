import React from 'react';
import { cls } from '../../util';
import styles from './Header.module.css';

export function Header() {
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
        <a href="#" className={cls(styles.sign)}>
          Sign In
        </a>
        <a href="#" className={cls(styles.sign)}>
          Sign Up
        </a>
      </nav>
      <div role="button" className={cls(styles.navButton)}>
        <div className={cls(styles.line)}></div>
        <div className={cls(styles.line)}></div>
        <div className={cls(styles.line)}></div>
      </div>
    </header>
  );
}
