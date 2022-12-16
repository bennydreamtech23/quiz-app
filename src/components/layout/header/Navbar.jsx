
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { Link} from "react-router-dom";
import Links from "../header/Links";

import logo from "../../../assets/Group 1 1.png";

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "transparent",
      boxShadow: '0px 0px 0px 0px',
    transition: theme.transitions.create(["width", "margin"], {
     easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navlinks: {
    marginLeft: theme.spacing(5),
   marginRight: theme.spacing(15),
   margin: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "green",
      borderBottom: "1px solid black",
    },
  },
  btn: {
  border: '1px  solid green',
  background: 'transparent',
  transition: '0.3s ease',
   textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    padding: theme.spacing(1),
  '&:hover': {
    boxShadow: '0px 0px 0px 4px green',
  }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

function NavBar(props) {
  const  classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <AppBar position="static"  className={classes.appBar}>
      <CssBaseline />
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h4" className={classes.logo}>
          <img src={logo} alt='logo' style= {{width: "50px"}}/>
        </Typography>
{isMobile ? (
          <Links />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
             About
            </Link>
            <Link to="/" className={classes.link}>
              Services
            </Link>
            <Link to="/" className={classes.link}>
              Blog
            </Link>
            <Link to="/" className={classes.link}>
              Contact
            </Link>
             <Link to="/" className={classes.btn}>
              Login
            </Link>
             <Link to="/" className={classes.btn}>
             Sign Up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
