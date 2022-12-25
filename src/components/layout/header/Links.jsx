import {useState,useEffect} from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles,
} from "@material-ui/core";
import NavbarStyles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"; 

//logout react properties
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout} from "../../core/login/firebase";

import {BsFillBrightnessHighFill, BsFillMoonFill} from "react-icons/bs";
const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
    link:{
        textDecoration:"none",
        color: 'black',
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
    padding: theme.spacing(1),
borderRadius: "3px",
  '&:hover': {
    boxShadow: '0px 0px 0px 4px #1D4645',
    color:"#1D4645",
  }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
    alignItems:"center",
  },
    listItem:{
      display: "flex",
      justifyContent:"center",
      textAlign:"center",
      marginTop: theme.spacing(3),
    },
}));

const Links = ({changeTheme,  currentTheme}) =>  {
const classes = useStyles();
  //const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  
  
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
    <div className="d-flex flex-column justify-content-center align-items-center">
   <Link to="/login" className="btn mb-3">
              Login
            </Link>
             <Link to="/signup" className="btn">
             Sign Up
            </Link>
            </div>
    </>
  ) : (
    <button className="btn" onClick={logout}>
      Log out
    </button>
  );
  
  return (
    <>
      <Drawer
        className={classes.drawer}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={classes.drawer}>
         <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/services" className={classes.link}>Services</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Blog</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
             {user ? (
        <Link
          to={`/dashboard`}
          className="link"
        >
          Dashboard
        </Link>
      ) : null}
            </ListItemText>
          </ListItem>
          
           <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
         {CTA}
         
          </ListItem>
          
        <ListItem className={NavbarStyles.toggle} onClick={changeTheme}
        style={{width: "50px", display: "flex", alignItems: "center", justifyContent:"center", marginTop:"2rem", margin:"auto"}}>
          {currentTheme === "dark" ? <BsFillBrightnessHighFill className={NavbarStyles.sun}/> :  <BsFillMoonFill className={NavbarStyles.moon}/>}
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon  className="link"/>
      </IconButton>
    </>
  );
}
export default Links;