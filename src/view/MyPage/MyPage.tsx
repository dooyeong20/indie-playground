import React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store';

export function MyPage() {
  const { displayName, email } = useSelector((state: TRootState) => state.user);

  return (
    <div>
      <div>{email}</div>
      <div>{displayName}</div>
    </div>
  );
}
