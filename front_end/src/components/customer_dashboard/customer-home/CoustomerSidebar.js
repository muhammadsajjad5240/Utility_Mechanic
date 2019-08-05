import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Coustomerhome from "./Customer-Home";
import SideProfile from './SideProfile';
import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core';
const drawerWidth = 220;
const qurryString = require("query-string");

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1F1F1F',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ResponsiveDrawer(props) {



  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function logout()
  {
    localStorage.clear();
    window.location.replace('/signIn')
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Link to={"/customer-home?id="+qurryString.parse(window.location.search).id+"&User="+qurryString.parse(window.location.search).User}><SideProfile /></Link>      
      <Divider />
      <List>
        {[
          <Link to={"/customer-home?id="+qurryString.parse(window.location.search).id+"&User="+qurryString.parse(window.location.search).User}><li id='homeTab' title='Home'><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='hideNavText' id='hideHomeText'>Home</span></li></Link>,
          <Link to={"/customer-order?id="+qurryString.parse(window.location.search).id+"&User="+qurryString.parse(window.location.search).User}><li title='Orders'><i class="material-icons">reorder</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='hideNavText' id='hideOrderText'>Orders</span></li></Link>,
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            color="secondary"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <h2 className='CustomerappBarHeading'>Customer Panel</h2>
          <React.Fragment>
            <Badge title='Log Out' color="primary" className='customerlogoutIcon' onClick={logout}>
              <i class="material-icons" style={{fontSize:'4em'}} >settings_power</i>
            </Badge>
          </React.Fragment>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Coustomerhome />
          <br />
          <br />
        </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
