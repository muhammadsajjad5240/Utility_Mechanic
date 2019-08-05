import AppBar from '@material-ui/core/AppBar';
import React from 'react'; import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './customerInfo.css';
import { Link } from 'react-router-dom';
import CustomerInfo from "../customerInfo/customerInfo";
import SideProfile from '../adminProfile/SideProfile';
import Badge from '@material-ui/core/Badge';
import {NotificationImportant} from '@material-ui/icons';
const drawerWidth = 240;
const qurryString = require("query-string");

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',//this is for hide
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
      width: '100%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',//this is for button Show
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
  margin: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(30),
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
      <Link to={"/admin-profile?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><SideProfile /></Link>
      <Divider />
      <List>
        {[
          <Link to={"/dashboard-home?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li title='Home'><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Home</span></li></Link>,
          <Link to={"/mechanic-info?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li title='Mechanics'><i class="fas fa-wrench"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Mechanics</span></li></Link>,
          // <Link to={"/our-service?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li title='Services'><i class="fab fa-servicestack"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Service</span></li></Link>,
          <Link to={"/orders?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li title='Orders'><i class="material-icons">reorder</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Orders</span></li></Link>,
          <Link to={"/customer-detail?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li title='Customers'><i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Customers</span></li></Link>,
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          <h3 style={{color:'white', fontSize:"20px"}} title='Reports'><i class="material-icons">file_copy</i>&nbsp;&nbsp;&nbsp;&nbsp;Reports</h3>,          
          <Link to={"/mechanic-report?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li style={{textAlign:'left', marginLeft:'25%'}}  title='Mechanic Report'>Mechanic</li></Link>,
          <Link to={"/service-report?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li style={{textAlign:'left', marginLeft:'25%'}} title='Service Report'>Service</li></Link>,
          <Link to={"/customer-report?id=" + qurryString.parse(window.location.search).id + "&User=" + qurryString.parse(window.location.search).User}><li style={{textAlign:'left', marginLeft:'25%'}} title='Customer Report'>Customer</li></Link>,
         <Link to={"/order-report?id=" + qurryString.parse(window.location.search).id+ "&User=" + qurryString.parse(window.location.search).User}><li style={{textAlign:'left', marginLeft:'25%'}} title='Order Report'>Order</li></Link>,          

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
          <center><h2 className='appBarHeading'>Admin Panel</h2></center>
          <React.Fragment>
            <Badge title='Log Out' color="primary" className='logoutIcon' onClick={logout}>
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

          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* for hiddin side bar */}
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className='Customerinfodiv'>
          <CustomerInfo />
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
