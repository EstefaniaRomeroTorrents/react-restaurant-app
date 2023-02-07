import "./Header.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
//import logo from "../../../public/img/logo.png";
//import logoDark from "../../../public/img/logoDark.png";
import { useScrollTrigger } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeContext } from "../..";

const drawerWidth = 240;
const navItems = ["La carte", "Le restaurant", "Contact", "News"];
function ShrinkScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 62,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    className: trigger ? "no-shrink" : "shrink",
  });
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <img
            className="logo"
            src={theme === "light" ? "/img/logo.png" : "/img/logoDark.png"}
            alt="Logo"
          />
        )}
      </ThemeContext.Consumer>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ShrinkScroll {...props}>
        <AppBar color="secondary" enableColorOnDark={true} component="nav">
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <ThemeContext.Consumer>
                {({ theme, changeTheme }) => (
                  <img
                    className="logo"
                    src={
                      theme === "light" ? "/img/logo.png" : "/img/logoDark.png"
                    }
                    alt="Logo"
                  />
                )}
              </ThemeContext.Consumer>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} color="inherit">
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ShrinkScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
