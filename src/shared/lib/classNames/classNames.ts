export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined>) => {
  const arr = [
    cls,
    ...Object.keys(mods).filter((key) => Boolean(mods[key])),
    ...additional.filter(Boolean),
  ];
  return arr.join(' ');
};
