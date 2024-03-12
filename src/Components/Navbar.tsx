import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useStyles } from '../styles/Navbar';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllUserInformation, logout } from '../_redux/actions/auth';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getConnectedUser } from '../common';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSideBar, setOpenSideBar] = useState(false);
  const savedUsername = getConnectedUser();
  const logo = require('../../src/assets/logo.png');
  const classes = useStyles();
  const disptach = useAppDispatch();
  const dispatch=useAppDispatch() ;
    const connected = useAppSelector(
      (state: any) => state.globalStore.connected 
      );
  const {connectedUser} = useAppSelector((state) => state.auth);
  const Logout = async () => {
    await disptach(logout());
    window.location.href='/' 
};

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const openProfile = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
   dispatch(getAllUserInformation())}
   , [dispatch,connected])
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      className={classes.appBar}
    >
      <Toolbar className={classes.bar}>
        <Box className={classes.boxLogo}>
          <MenuOpenIcon
            className={classes.menuicon}
            onClick={(e) => setOpenSideBar(true)}
          />
          <img alt="logo" src={logo} className={classes.logoMobil} />
        </Box>
        <Box className={classes.boxweb}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Box>

        <Box className={classes.userBox}>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon className={classes.notification} />
          </Badge>

          <Box className={classes.boxAvatar}>
            <Avatar className={classes.avatar} alt="Remy Sharp" src="" />

            <Button
              id="basic-button"
              aria-controls={openProfile ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? 'true' : undefined}
              onClick={handleClick}
              className={classes.userName}
              sx={{ fontWeight: 'bold' }}
              endIcon={<ArrowDropDownIcon />}
            >
            {connectedUser?.firstName}
            </Button>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openProfile}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
              elevation: 1,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                borderRadius: '0px',
                borderTop: '1px solid black',
                borderLeft: '1px solid black',
                mt: 2,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 15,
                  width: 15,
                  height: 15,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-52%) rotate(51deg)',
                  zIndex: 0,
                  borderLeft: '1px solid black',
                },
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ fontWeight: 'bold' }}
              className={classes.menuDesktop}
            >
              <ListItemIcon>
                <AccountCircleIcon className={classes.iconMenu} />
              </ListItemIcon>
              <Link to={'./profile'} className={classes.menuItem}>
                {t('admin.navbar.Myaccount')}
              </Link>
            </MenuItem>
            <MenuItem onClick={Logout} sx={{ fontWeight: 'bold' }}>
              <ListItemIcon>
                <LogoutIcon className={classes.iconMenu} />
              </ListItemIcon>{' '}
              {t('admin.navbar.Logout')}
            </MenuItem>
          </Menu>
        </Box>
        <Box className={classes.Boxmobil}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src=""
            onClick={(e) => setOpen(true)}
            sx={{ position: 'relative' }}
          />
          <Typography
            variant="h6"
            className={classes.userName}
            sx={{ fontWeight: 'bold' }}
          >
            {' '}
            {connectedUser?.firstName}
          </Typography>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        PaperProps={{
          elevation: 1,
          sx: {
            borderRadius: '0px',
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: 1.5,
              mr: 5,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 50,
              width: 15,
              height: 15,
              bgcolor: 'background.paper',
              transform: 'translateY(-52%) rotate(51deg)',
              zIndex: 0,
              borderLeft: '1px solid black',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          {t('admin.navbar.Myaccount')}
        </MenuItem>

        <MenuItem onClick={Logout}>
          {' '}
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>{' '}
          {t('admin.navbar.Logout')}
        </MenuItem>
      </Menu>

      <Menu
        PaperProps={{
          style: {
            width: '20ch',
            borderRadius: '0px',
          },
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openSideBar}
        onClose={(e) => setOpenSideBar(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          {' '}
          <NavLink
            to={'/Dashboard'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Dashboard')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/Categories'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Categories')}
          </NavLink>{' '}
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/Products'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Products')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/Returns'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Returns')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/Orders'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Orders')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/report'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.report')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/Discounts'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Discount')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          {' '}
          <NavLink
            to={'/Settings'}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              textDecoration: 'none',
            })}
          >
            {t('admin.sideBar.Settings')}
          </NavLink>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
