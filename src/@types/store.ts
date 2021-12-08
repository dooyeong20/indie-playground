export enum EViewMode {
  desktop = 'desktop',
  tablet = 'tablet',
  mobile = 'mobile',
}

export enum EUserStatus {
  guest = 'guest',
  member = 'member',
}

export type TUserState = {
  status: EUserStatus;
  userName: string;
};

export type TAppState = {
  viewMode: EViewMode;
};
