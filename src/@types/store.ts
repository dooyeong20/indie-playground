import { TContent } from '.';

export enum EViewMode {
  desktop = 'desktop',
  tablet = 'tablet',
  mobile = 'mobile',
}

export enum EPage {
  home = 'home',
  post = 'post',
  review = 'review',
  signIn = 'signIn',
  signUp = 'signUp',
  myPage = 'myPage',
}

export enum EUserStatus {
  guest = 'guest',
  member = 'member',
}

export type TUserState = {
  status: EUserStatus;
  displayName: string;
  email: string;
};

export type TAppState = {
  viewMode: EViewMode;
  currentPage: EPage;
};

export type TContentState = {
  posts: TContent[];
  reviews: TContent[];
};
