import React from 'react';
import { cls } from '../../util';
import styles from './AuthButton.module.css';

interface IProps {
  onClick: () => void;
  LogoSVG: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  title: string;
}

export function AuthButton({ onClick, title, LogoSVG }: IProps) {
  return (
    <div role="button" onClick={onClick} className={cls(styles.siginButton)}>
      <LogoSVG className={cls(styles.logo)} />
      <span className={cls(styles.title)}>{title}</span>
    </div>
  );
}
