import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
   Box 
} from "@material-ui/core";
import { Link} from "react-router-dom";
import Links from "../header/Links";
//import React, { useState } from 'react';
import logo from "../../../assets/Group 1 1.png";
import NavbarStyles from "./Navbar.module.scss";
import {BsFillBrightnessHighFill, BsFillMoonFill} from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "transparent",
      boxShadow: '0px 0px 0px 0px',
  /*  transition: theme.transitions.create(["width", "margin"], {
     easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),*/
  },
  navlinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //marginLeft: theme.spacing(5),
  // marginRight: theme.spacing(15),
   margin: theme.spacing(5), 
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#32CD30",
    fontSize: "20px",
     marginRight: theme.spacing(3),
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "green",
      borderBottom: "1px solid black",
    },
  },
  active:{
    //marginRight: "50px",
   textDecoration: "none",
   color: "#32CD30",
    fontSize: "20px",
    "&:hover": {
      color: "green",
      borderBottom: "1px solid black",
    },
  },
  btn: {
  border: '1px  solid #32CD30',
  background: 'transparent',
  transition: '0.3s ease',
   textDecoration: "none",
    color: "#32CD30",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
   marginRight: theme.spacing(5),
    padding: theme.spacing(1),
    borderRadius: "3px",
  '&:hover': {
    boxShadow: '0px 0px 0px 4px #1D4645',
    color: "green"
  }
  },
  
    btn1: {
  border: '1px  solid #32CD30',
  background: 'transparent',
  transition: '0.3s ease',
   textDecoration: "none",
    color: "#32CD30",
    fontSize: "20px",
    marginLeft: theme.spacing(3),
   marginRight: theme.spacing(3),
    padding: theme.spacing(1),
    borderRadius: "3px",
  '&:hover': {
    boxShadow: '0px 0px 0px 4px #1D4645',
    color: "green"
  }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  box:{
    display: "flex",
    justifyContent:"flex-end",
  }
  
}));

function NavBar({changeTheme,  currentTheme}) {
  const  classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
 // const [lightMode, setLightMode] = useState(false)
  /*
    const changeModeHandler = () => {
        document.body.classList.toggle('dark-theme-variables');
        setLightMode(!lightMode)
    }
    */
  return (
    <nav className="container-fluid m0-3 py-3">
    <AppBar position="static"  className={classes.appBar}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logo}>
          <img src={logo} alt='logo' style= {{width: "80px"}}/>
        </Typography>
{isMobile ? (
          <Links changeTheme={changeTheme} currentTheme={theme}/>
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.active}>
             About
            </Link>
            <Link to="/"  className={classes.link}>
              Services
            </Link>
            <Link to="/" className={classes.link}>
              Blog
            </Link>
            <Link to="/" className={classes.link}>
              Contact
            </Link>
             <Link to="/" className={classes.link}>
            Dashboard
            </Link>
            <Box className={classes.Box}>
             <Link to="/" className={classes.btn}>
              Login
            </Link>
             <Link to="/" className={classes.btn1}>
             Sign Up
            </Link>
            </Box>
            <Box className={NavbarStyles.toggle} onClick={changeTheme}>
          {currentTheme === "dark" ? <BsFillBrightnessHighFill className={NavbarStyles.sun}/> :  <BsFillMoonFill className={NavbarStyles.moon}/>}
          </Box>
          </div>
        )}
      </Toolbar>
    </AppBar>
    </nav>
  );
}

export default NavBar;
