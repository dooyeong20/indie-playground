import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../firebase-config';

export const getReviews = async (count: number) => {
  console.log('getting reviews ...');
  const q = query(collection(db, 'review'), limit(count));
  return getDocs(q);
};

export const getPosts = async (count: number) => {
  console.log('getting posts ...');
  const q = query(collection(db, 'post'), limit(count));
  return getDocs(q);
};
