import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth } from '~/hooks';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { themeAtom } from '~/recoil/atoms';

export const Navbar = () => {
    const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useRecoilValue(themeAtom);
    const setTheme = useSetRecoilState(themeAtom);

    const handleThemeToggle = () => {
        setTheme((currentTheme) => (currentTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
    }; 
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="absolute">
        <Toolbar sx={{ 
            display: "flex", 
            justifyContent: "space-between" 
        }}>
            <Typography variant="h6">
                Flashly
            </Typography>
            <Box>
                <IconButton
                   size="large"
                    aria-haspopup="true"
                    onClick={handleThemeToggle}
                    color="inherit"
                >
                    {theme === "lightTheme" 
                        ? <LightModeIcon />
                        : <DarkModeIcon />
                    }
                </IconButton>
              <IconButton
                size="large"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                    <MenuItem onClick={handleClose}>
                        Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        My account
                    </MenuItem>
                    <MenuItem onClick={logout}>
                        Logout
                    </MenuItem>
              </Menu>
            </Box>
        </Toolbar>
      </AppBar>
  );
}
