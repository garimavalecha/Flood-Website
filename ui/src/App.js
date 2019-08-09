import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Flood Reports
            </Typography>

            <NavLink
              exact
              to="/form"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <Button color="inherit">New Post</Button>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <Button color="inherit">Get Post</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
      <Home />
    </BrowserRouter>
  );
}

export default App;
