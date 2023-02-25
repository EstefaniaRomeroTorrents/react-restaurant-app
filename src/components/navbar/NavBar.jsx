import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, useScrollTrigger } from "@mui/material";
import "./NavBar.css";
import { ThemeContext } from "../../index";
import { NavLink } from "react-router-dom";
/*import LangSwitch from "../lang/LangSwitch";*/
import MyLinks from "./MyLinks";
import { scrollToTop } from "./helpers";

const drawerWidth = 240;
const navItems = [
  {
    name: "appbar.restaurant",
    route: "/#restaurante",
  },
  {
    name: "appbar.carte",
    route: "/#carta",
  },
  {
    name: "appbar.histoire",
    route: "/#historia",
  },
  {
    name: "appbar.contact",
    route: "/#contact",
  },
  {
    name: "appbar.reserve",
    route: "/contact",
  },
];

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

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const themeMode = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Le Duc
      </Typography>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column" }}>
        <MyLinks links={navItems} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ShrinkScroll {...props}>
          <AppBar
            color="secondary"
            position="fixed"
            elevation={0}
            enableColorOnDark={true}
          >
            <Container maxWidth="lg">
              <Toolbar
                sx={{ justifyContent: "space-between" }}
                variant="regular"
              >
                <Box
                  sx={{ mr: 2, display: { sm: "none" } }}
                  style={{ width: "100%" }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <NavLink to="/" onClick={() => scrollToTop()}>
                    <img
                      src={
                        themeMode.theme === "dark"
                          ? "/img/logoDark.png"
                          : "/img/logo.png"
                      }
                      alt="Logo"
                      height="32"
                      className="absolute-center"
                    />
                  </NavLink>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  <NavLink to="/" onClick={() => scrollToTop()}>
                    <img
                      src={
                        themeMode.theme === "dark"
                          ? "/img/logoDark.png"
                          : "/img/logo.png"
                      }
                      alt="Logo"
                      height="32"
                    />
                  </NavLink>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <MyLinks links={navItems} />
                  {/* <LangSwitch />*/}
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
    </>
  );
}

export default NavBar;
