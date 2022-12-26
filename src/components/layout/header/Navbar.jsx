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
import NavbarStyles from "./Navbar.module.scss";
import {BsFillBrightnessHighFill, BsFillMoonFill} from "react-icons/bs";

//logout react properties
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout} from "../../core/login/firebase";


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
  //logout function
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  // CTA -- CALL TO ACTIION
  const CTA = !user ? (
    <>
   <Link to="/login" className="btn">
              Login
            </Link>
             <Link to="/signup" className="btn">
             Sign Up
            </Link>
    </>
  ) : (
    <button className="btn" onClick={logout}>
      Log out
    </button>
  );

  const  classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <nav className="container-fluid m0-3 py-3">
    <AppBar position="static"  className={classes.appBar}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className="logo">
         <Link to="/" className="logo"> Ultimatium Arena</Link>
        </Typography>
{isMobile ? (
          <Links changeTheme={changeTheme} currentTheme={theme}/>
        ) : (
          <div className={classes.navlinks}>
            <Link to="/about" className="link">
             About
            </Link>
            <Link to="/services"  className="link">
              Services
            </Link>
            <Link to="/" className="link">
              Blog
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
             {user ? (
        <Link
          to={`/dashboard`}
          className="link"
        >
          Dashboard
        </Link>
      ) : null}
         <Box className={classes.Box}>
{CTA}
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
