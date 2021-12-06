import React from 'react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <a href="#" className={styles.logo}>
        <span className={styles.highlight}>INDIE</span> Playground
      </a>
      <nav className={styles.navList}>
        <a href="#" className={styles.active}>
          Home
        </a>
        <a href="#">Post</a>
        <a href="#">Review</a>
        <a href="#" className={styles.sign}>
          Sign In
        </a>
        <a href="#" className={styles.sign}>
          Sign Up
        </a>
      </nav>
      <div role="button" className={styles.navButton}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </header>
  );
}
