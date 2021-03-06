import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
// import { Button } from "@material-ui/core";
/**
 * @author
 * @function Header
 **/
const Header = (props) => {
  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <div className="logo">uChat Messenger</div>
        <ul className="left">
          <li>
              <NavLink to={"/login"}>Login</NavLink>
            {/* <Button>
            </Button> */}
          </li>
          <li>
              <NavLink to={"/signup"}>Sign up</NavLink>
            {/* <Button>
            </Button> */}
          </li>
        </ul>
      </div>
      <ul className="menu">
        <li>
          <Link to={"#"} onClick={props.logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
