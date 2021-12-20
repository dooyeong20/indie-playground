import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { db } from '../firebase-config';

const detailCache = new Map<string, Promise<QuerySnapshot<DocumentData>>>();

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

export const getDetail = async (category: string, id: string) => {
  if (detailCache.has(id)) {
    console.log('getting cached detail!');
    return detailCache.get(id);
  }

  console.log('getting fresh detail!');
  const q = query(collection(db, category), where('id', '==', id));

  detailCache.set(id, getDocs(q));
  return detailCache.get(id);
};
