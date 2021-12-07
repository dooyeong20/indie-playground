export function cls(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
