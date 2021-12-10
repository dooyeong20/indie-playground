import React from 'react';
import { cls } from '../../util';
import styles from './DetailTextContent.module.css';

interface IProps {
  title: string;
  text: string;
}

export function DetailTextContent({ title, text }: IProps) {
  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.title)}>{title}</h2>
      <p className={cls(styles.text)}>{text}</p>
    </div>
  );
}
