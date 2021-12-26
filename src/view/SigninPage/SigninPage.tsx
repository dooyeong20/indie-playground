import React, { useEffect, useMemo } from 'react';
import { cls } from '../../util';
import styles from './SigninPage.module.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/userSlice';
import { EUserStatus } from '../../@types';
import { AuthButton } from '../../component';
import { ReactComponent as GoogleLogo } from '../../assets/googleLogo.svg';

export default function SigninPage() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const provider = useMemo(() => new GoogleAuthProvider(), []);
  const handleGoogleSignin = async () => {
    const res = await signInWithPopup(auth, provider);
    const { displayName, email } = res.user;
    dispatch(
      loginUser({
        status: EUserStatus.member,
        displayName: displayName ?? 'no name',
        email: email ?? 'no email',
      })
    );
  };

  useEffect(() => {
    provider.setCustomParameters({
      prompt: 'select_account',
    });
  }, [provider]);

  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.welcome)}>Welcome!</h2>
      <div className={cls(styles.buttonContainer)}>
        <AuthButton
          LogoSVG={GoogleLogo}
          onClick={handleGoogleSignin}
          title="Google 계정으로 로그인"
        />
      </div>
    </div>
  );
}
