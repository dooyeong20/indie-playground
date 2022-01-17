export function cls(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * return reversed list for one depth
 * @param list array with only one depth
 * @returns list (one depth) that is reversed
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getReversedList(list: any[]) {
  const res = [...list];
  for (let i = 0; i < (res.length - 1) / 2; i++) {
    [res[i], res[res.length - 1 - i]] = [res[res.length - 1 - i], res[i]];
  }
  return res;
}
