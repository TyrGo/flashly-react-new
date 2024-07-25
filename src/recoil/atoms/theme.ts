import { atom } from 'recoil';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'lightTheme';
};

export const themeAtom = atom({
  key: 'themeAtom',
  default: getInitialTheme(),
});
