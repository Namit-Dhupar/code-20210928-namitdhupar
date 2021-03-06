import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Drawer, Divider, Hidden, List, ListItem, ListItemIcon, 
ListItemText, Button, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import HomeIcon from '@material-ui/icons/Home';
import ModalEnquiry from '../Modal/ModalEnquiry'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: '#fafafa',
    color: "#000000"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#fafafa',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '85%',
    },
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  nolink: {
    textDecoration: 'none',
    color: '#000000'
  }
}));

const PrimarySearchAppBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <div className={classes.grow}>
       <AppBar className={classes.appBar}>
        <Toolbar>
        <Hidden mdUp>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
          <div className={classes.grow} />
          <Link to="/">
          <img className={classes.logo} src="/Images/Banner.jpg" alt="pes logo" />
          </Link>
          <Hidden smDown>
          <Grid container>
          <Button color="inherit">
          <Link to="/" className={classes.nolink}>
            Home
          </Link>  
          </Button>
          <Link to="/catalogue" className={classes.nolink}>
          <Button color="inherit">Catalogue</Button>
          </Link>
          </Grid>
          </Hidden>
          <ModalEnquiry />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
      <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link onClick={handleDrawerToggle} to="/" className={classes.nolink}>
        <ListItem button>
           <ListItemIcon><HomeIcon /></ListItemIcon>
           <ListItemText primary="Home" />
        </ListItem>
        </Link>

        <Link onClick={handleDrawerToggle} to="/catalogue" className={classes.nolink}>
        <ListItem button>
           <ListItemIcon><CardTravelIcon /></ListItemIcon>
           <ListItemText primary="Catalogue" />
        </ListItem>
        </Link>

      </List>
     </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default PrimarySearchAppBar;