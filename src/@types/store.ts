export enum EViewMode {
  desktop = 'desktop',
  tablet = 'tablet',
  mobile = 'mobile',
}

export type TAppState = {
  viewMode: EViewMode;
};
