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
const reviewsCache = new Map<string, Promise<QuerySnapshot<DocumentData>>>();
const postsCache = new Map<string, Promise<QuerySnapshot<DocumentData>>>();

export const getReviews = async (count: number) => {
  if (reviewsCache.has(count + '')) {
    console.log('[cached] reviews!');
    return reviewsCache.get(count + '');
  }
  console.log('[fresh] reviews ...');
  const q = query(collection(db, 'review'), limit(count));
  reviewsCache.set(count + '', getDocs(q));
  return reviewsCache.get(count + '');
};

export const getPosts = async (count: number) => {
  if (postsCache.has(count + '')) {
    console.log('[cached] posts ...');
    return postsCache.get(count + '');
  }
  console.log('[fresh] posts ...');
  const q = query(collection(db, 'post'), limit(count));
  postsCache.set(count + '', getDocs(q));
  return postsCache.get(count + '');
};

export const getDetail = async (category: string, id: string) => {
  if (detailCache.has(id)) {
    console.log('[cached] detail!');
    return detailCache.get(id);
  }

  console.log('[fresh] detail!');
  const q = query(collection(db, category), where('id', '==', id));

  detailCache.set(id, getDocs(q));
  return detailCache.get(id);
};
