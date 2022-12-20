
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

//import Toggle from '../../Toggle/Toggle'
import { Link} from "react-router-dom";
import Links from "../header/Links";
//import Toggle from '../Toggle/Toggle'
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
    color: "black",
    fontSize: "20px",
     marginRight: "50px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "green",
      borderBottom: "1px solid black",
    },
  },
  active:{
    marginRight: "50px",
   textDecoration: "none",
   color: "black",
    fontSize: "20px",
    "&:hover": {
      color: "green",
      borderBottom: "1px solid black",
    },
  },
  btn: {
  border: '1px  solid #1D4645',
  background: 'transparent',
  transition: '0.3s ease',
   textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    padding: theme.spacing(1),
    borderRadius: "3px",
  '&:hover': {
    boxShadow: '0px 0px 0px 4px #1D4645',
    color: "#1D4645"
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

function NavBar() {
  const  classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <AppBar position="static"  className={classes.appBar}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logo}>
          <img src={logo} alt='logo' style= {{width: "80px"}}/>
        </Typography>
{isMobile ? (
          <Links />
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
             <Link to="/" className={classes.btn}>
             Sign Up
            </Link>
            </Box>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
