import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GridOnIcon from '@mui/icons-material/GridOn';
import CategoryIcon from '@mui/icons-material/Category';
import { useStyles } from '../styles/SideBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import RepartitionIcon from '@mui/icons-material/Repartition';
import DiscountIcon from '@mui/icons-material/Discount';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <ListItem disablePadding className={classes.listitem}>
          <NavLink
            to={'/Dashboard'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Dashboard')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Categories'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <CategoryIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Categories')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Products'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <GridOnIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Products')}{' '}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Returns'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <RepartitionIcon className={classes.icon} />{' '}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Returns')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Orders'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              {' '}
              <ShoppingCartIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Orders')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Report'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <NoteAltIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.report')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Discounts'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <DiscountIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Discount')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to={'/Settings'}
            className={classes.navlinks}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
            })}
          >
            <ListItemIcon>
              <SettingsIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.Typography}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.sideBar.Settings')}
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default SideBar;
