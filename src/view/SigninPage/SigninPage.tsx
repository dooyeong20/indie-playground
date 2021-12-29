import React, { useEffect, useMemo } from 'react';
import { cls } from '../../util';
import styles from './SigninPage.module.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/userSlice';
import { EUserStatus } from '../../@types';
import { AuthButton } from '../../component';
import { ReactComponent as GoogleLogo } from '../../assets/googleLogo.svg';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../DB';

export default function SigninPage() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = useMemo(() => new GoogleAuthProvider(), []);
  const handleGoogleSignin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const { displayName, email } = res.user;
      if (!displayName) {
        throw new Error('no user name found');
      }
      if (!email) {
        throw new Error('no email found');
      }
      dispatch(
        loginUser({
          status: EUserStatus.member,
          displayName: displayName,
          email: email ?? 'no email',
        })
      );
      signinUser(displayName, email);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };
  // TODO: kakao 401 에러 해결 필요
  // const handleKakaoSignin = async () => {
  //   location.href =
  //     'https://kauth.kakao.com/oauth/authorize?client_id=1c7898eda83bd793b9d070dc1c5621cb&redirect_uri=http://localhost:3000/signin&response_type=code';
  // };
  // const getToken = async (code: string) => {
  //   if (!code) {
  //     return;
  //   }

  //   const bodyData = {
  //     grant_type: 'authorization_code',
  //     client_id: '1c7898eda83bd793b9d070dc1c5621cb',
  //     redirect_uri: 'http://localhost:3000/signin',
  //     code,
  //     client_secret: 'GPQSv4puVFD0rmepmi54fiADm7QehLXO',
  //   };

  //   const res = await axios.post(
  //     'https://kauth.kakao.com/oauth/token',
  //     bodyData
  //   );

  //   console.log(res.headers);
  // };

  useEffect(() => {
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    // const code = search.slice(6);
    // getToken(code);
  }, [provider]);

  return (
    <div className={cls(styles.container)}>
      <h2 className={cls(styles.welcome)}>Welcome!</h2>
      <div className={cls(styles.buttonContainer)}>
        <AuthButton
          LogoSVG={GoogleLogo}
          onClick={handleGoogleSignin}
          title="Google 계정으로 시작하기"
        />
        {/* TODO: kakao 401 에러 해결 필요 */}
        {/* <AuthButton
          LogoSVG={GoogleLogo}
          onClick={handleKakaoSignin}
          title="Kakao 계정으로 시작하기"
        /> */}
      </div>
    </div>
  );
}
