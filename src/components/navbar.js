import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import "./Navbar.css";

const Navbar=()=>{
return (
    <AppBar className="navbar" position="static">
          <Toolbar>
              <Typography variant="h6">
                  Live Score
              </Typography>
              {/* <Typography variant="h6">
                  Admin
              </Typography> */}
              
          </Toolbar>
    </AppBar>
);
};

export default Navbar;