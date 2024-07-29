import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export const GlobalStyles = () => {
  return (
    <MUIGlobalStyles
      styles={{
        html: {
          height: '100%',
          fontFamily: 'Roboto, sans-serif',
        },
        body: {
          margin: 0,
          padding: 0,
          display: "flex",
          placeItems: "center",
          minWidth: "320px",
          height: '100%',
          minHeight: "100vh",
        },
        '#root': {
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        },
      }}
    />
  );
};
