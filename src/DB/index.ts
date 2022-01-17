import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  where,
  addDoc,
  orderBy,
} from 'firebase/firestore';
import { TContent } from '../@types';
import { db } from '../firebase-config';

const detailCache = new Map<string, Promise<QuerySnapshot<DocumentData>>>();
const reviewsCache = new Map<string, Promise<QuerySnapshot<DocumentData>>>();
const postsCache = new Map<string, Promise<QuerySnapshot<DocumentData>>>();
const myCache: {
  [key in string]: { posts: TContent[] | null; reviews: TContent[] | null };
} = {};

export const getReviews = async (count: number) => {
  if (reviewsCache.has(count + '')) {
    console.log('[cached] reviews!');
    return reviewsCache.get(count + '');
  }
  console.log('[fresh] reviews ...');
  const q = query(
    collection(db, 'review'),
    orderBy('created', 'desc'),
    limit(count)
  );
  reviewsCache.set(count + '', getDocs(q));
  return reviewsCache.get(count + '');
};

export const getPosts = async (count: number) => {
  if (postsCache.has(count + '')) {
    console.log('[cached] posts ...');
    return postsCache.get(count + '');
  }
  console.log('[fresh] posts ...');
  const q = query(
    collection(db, 'post'),
    orderBy('created', 'desc'),
    limit(count)
  );
  postsCache.set(count + '', getDocs(q));
  return postsCache.get(count + '');
};

export const getMyPosts = async (email: string) => {
  if (myCache[email]?.posts) {
    console.log('[cache] my posts');
    return myCache[email].posts;
  }
  const posts: TContent[] = [];
  const q = query(collection(db, 'post'), where('authorEmail', '==', email));
  (await getDocs(q)).forEach((doc) => {
    posts.push(doc.data() as TContent);
  });
  if (myCache[email]) {
    myCache[email].posts = posts;
  } else {
    myCache[email] = { posts, reviews: null };
  }
  console.log('[fresh] my posts');
  return myCache[email].posts;
};

export const getMyReviews = async (email: string) => {
  if (myCache[email]?.reviews) {
    console.log('[cache] my reviews');
    return myCache[email].reviews;
  }
  const reviews: TContent[] = [];
  const q = query(collection(db, 'review'), where('authorEmail', '==', email));
  (await getDocs(q)).forEach((doc) => {
    reviews.push(doc.data() as TContent);
  });
  if (myCache[email]) {
    myCache[email].reviews = reviews;
  } else {
    myCache[email] = { posts: null, reviews };
  }
  console.log('[fresh ] my reviews');
  return myCache[email].reviews;
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

export const signinUser = async (username: string, email: string) => {
  const q = query(collection(db, 'user'), where('username', '==', username));
  const qSnap = await getDocs(q);
  if (!qSnap.empty) {
    console.log(`${qSnap.docs[0].data().username} already exists!`);
    return;
  }
  const docRef = await addDoc(collection(db, 'user'), {
    username,
    email,
  });

  console.log(`${docRef.id} saved!`);
};

export const addContent = async ({
  id,
  mainImagePath,
  imagePaths,
  created,
  title,
  type,
  content,
  authorEmail,
}: TContent) => {
  const docRef = await addDoc(collection(db, type), {
    id,
    mainImagePath,
    imagePaths,
    title,
    type,
    created,
    content,
    authorEmail,
  });
  console.log(`${docRef.id} saved!`);
};
