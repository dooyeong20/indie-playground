import React from 'react';
import styles from './Footer.module.css';
import { cls } from '../../util';

export function Footer() {
  return (
    <footer className={cls(styles.container)}>
      <span className={cls(styles.paragraph)}>
        © 2021 INDIE Playground. All rights reserved.
      </span>
      <span className={cls(styles.paragraph)}>
        개발자 이메일: noviced22@gmail.com{' '}
      </span>
    </footer>
  );
}
