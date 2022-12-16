import {useState} from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 useTheme,
 makeStyles
} from "@material-ui/core";

import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"; 

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
  border: '1px  solid green',
  background: 'transparent',
  transition: '0.3s ease',
   textDecoration: "none",
    color: "black",
    fontSize: "20px",
    padding: theme.spacing(1),
borderRadius: "3px",
  '&:hover': {
    boxShadow: '0px 0px 0px 4px green',
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
    icon:{
        color: "black",
    },
    listItem:{
      display: "flex",
      justifyContent:"flex-end",
      textAlign:"center",
      marginTop: theme.spacing(3),
    },
}));

const Links = () =>  {
const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
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
              <Link to="/about" className={classes.link}>Services</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Blog</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/about" className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
           <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
             <Link to="/" className={classes.btn}>
              Login
            </Link>
            </ListItemText>
          </ListItem>
           <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
             <Link to="/" className={classes.btn}>
             Sign Up
            </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </>
  );
}
export default Links;