import { atom } from 'recoil';

export type JwtAtom = {
  access: string;
  refresh: string;
};

const localStorageAccessKey = 'access';
const localStorageRefreshKey = 'refresh';

const getJwtFromLocalStorage = (): JwtAtom | null => {
  const access = localStorage.getItem(localStorageAccessKey);
  const refresh = localStorage.getItem(localStorageRefreshKey);

  return access && refresh ? { access, refresh } : null;
};

const addJwtToLocalStorage = (jwt: JwtAtom) => {
  localStorage.setItem(localStorageAccessKey, jwt.access);
  localStorage.setItem(localStorageRefreshKey, jwt.refresh);
};

const removeJwtFromLocalStorage = () => {
  localStorage.removeItem(localStorageAccessKey);
  localStorage.removeItem(localStorageRefreshKey);
};

export const jwtAtom = atom<JwtAtom | null>({
  key: 'jwt',
  default: null,
  effects: [
    ({ onSet, setSelf }) => {
      // Read from localStorage on initialization
      const item = getJwtFromLocalStorage();
      if (item !== null) {
        setSelf(item);
      }

      // Persist to localStorage
      onSet((newValue, _, isReset) => {
        if (newValue === null || isReset) {
          removeJwtFromLocalStorage();
        } else {
          addJwtToLocalStorage(newValue);
        }
      });
    },
  ],
});
