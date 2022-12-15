
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
//import { useContext } from "react";
//import { AuthContext } from "../../contexts/authContext/AuthContext";
import { Stack } from "@mui/material";

const Links = ({ isMobile }) => {
  //const { user } = useContext(AuthContext);
  return (
    <Stack
      direction={{ md: `row` }}
      gap={3}
      className={[style.links, isMobile ? null : style.navbarLink].join(" ")}
    >
      <NavLink
        to={``}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        How it works
      </NavLink>
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        About Us
      </NavLink>
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Contact Us
      </NavLink>
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Subscription Plan
      </NavLink>

        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          Dashboard
        </NavLink>
    </Stack>
  );
};

export default Links;
