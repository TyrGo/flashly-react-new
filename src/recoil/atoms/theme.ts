import { atom } from 'recoil';

export const themeAtom = atom<'lightTheme' | 'darkTheme'>({
    key: 'theme',
    default: 'lightTheme',
});
