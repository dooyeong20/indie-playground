import { TContent } from '../@types';

const posts: TContent[] = [
  {
    id: 1,
    mainImagePath:
      'https://play-lh.googleusercontent.com/2_M3GXptvR4z83AuWce9xAKKKhCOEZLVOeediIMRSe5hcKApDmLVefT9q8xpZZrWTB0=s96-rw',
  },
  {
    id: 2,
    mainImagePath:
      'https://play-lh.googleusercontent.com/8DtlOHx-zIncYJE-kwHnOTBXycjAzwufkuk0uad7_MzWP17auA24THldTwhEru-b-7I=s128-rw',
  },
  {
    id: 3,
    mainImagePath:
      'https://play-lh.googleusercontent.com/a7xhCHImKBVrcfDQMROm-kY40MxuRzkgobDQfYj3YvDDuDuR_pHPbg54FqhUm_OYDIE=w1052-h592-rw',
  },
  {
    id: 4,
    mainImagePath:
      'https://play-lh.googleusercontent.com/lrLRup7kuMuc3c6R_DPC0SRA0_VaeJHTpwQuvY4OQuUjQ0tLxVhO4sWyO_T4OwGtikwz=s128-rw',
  },
  {
    id: 5,
    mainImagePath:
      'https://play-lh.googleusercontent.com/DJexP6PO8dL06XvNrjG7plb7SW_SaxuNamO80ab512JA71lBEBUnaJCaZzlqWVrrlEiG=s128-rw',
  },
];

export const fetchPosts = () =>
  new Promise<TContent[]>((res) => {
    setTimeout(() => res(posts), 1000);
  });
