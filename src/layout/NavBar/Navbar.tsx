import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLinks } from './components/NavLinks';
import { SettingsMenu } from './components/SettingsMenu';

export const Navbar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Flashly
        </Typography>
        <NavLinks />
        <SettingsMenu />
      </Toolbar>
    </AppBar>
  );
};
