import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { themeAtom } from '~/recoil/atoms';
import { darkTheme, lightTheme } from '~/styles/theme';
import { Children } from '~/types';
import { GlobalStyles } from '~/styles/globalStyles';

export const MUIProvider = (props: Children) => {
  const { children } = props;
  const theme = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
