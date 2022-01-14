import { EContentType, TContent } from '../@types';

const hotContents: TContent[] = [
  {
    id: '13',
    title: '임시 타이틀',
    authorEmail: '',
    imagePaths: [],
    type: EContentType.post,
    mainImagePath:
      'https://play-lh.googleusercontent.com/K1_ITo6dwCwGhUu6I3tC0GreSeW2aN90BcEMeBT_X2tmLzGn9X0v-VtlfAkNwVCHB48=w1052-h592-rw',
  },
  {
    id: '14',
    title: '임시 타이틀',
    authorEmail: '',
    imagePaths: [],
    type: EContentType.post,
    mainImagePath:
      'https://play-lh.googleusercontent.com/aGuQQwqd57dCotsDQDidW27NxSH65_5Jcv-3xRAe1Tc2xL-5LOTYd0ODNYGpYdxZw3I=w1052-h592-rw',
  },
  {
    id: '15',
    title: '임시 타이틀',
    authorEmail: '',
    imagePaths: [],
    type: EContentType.post,
    mainImagePath:
      'https://play-lh.googleusercontent.com/a7xhCHImKBVrcfDQMROm-kY40MxuRzkgobDQfYj3YvDDuDuR_pHPbg54FqhUm_OYDIE=w1052-h592-rw',
  },
  {
    id: '16',
    title: '임시 타이틀',
    authorEmail: '',
    imagePaths: [],
    type: EContentType.post,
    mainImagePath:
      'https://play-lh.googleusercontent.com/vJlOcvDk9RBu0ejQY3C32ykLg05G5K-1ClaW0SOmys3-3yj_xOMxKx90Ft6QD3nUZGE=w1052-h592-rw',
  },
  {
    id: '17',
    title: '임시 타이틀',
    authorEmail: '',
    imagePaths: [],
    type: EContentType.post,
    mainImagePath:
      'https://play-lh.googleusercontent.com/hRSBGsYUMs4wnoxzvCHcwXKV3fOhX6oXuFZGsDIRXlCkSgG-jDkLCudyQcMVISKwoW8=w1052-h592-rw',
  },
];

export const fetchHotContents = () =>
  new Promise<TContent[]>((res) => {
    setTimeout(() => res(hotContents), 500);
  });
