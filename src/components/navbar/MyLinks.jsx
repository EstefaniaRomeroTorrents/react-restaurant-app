import * as React from "react";
import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { scrollToTop, scrollWidthOffset } from "./helpers";
import { useTranslation } from "react-i18next";

function MyLinks({ links }) {
  const { t } = useTranslation("common");

  return (
    <>
      {links.map(({ name, route }, i) => {
        if (route.includes("#")) {
          return (
            <HashLink
              key={i}
              to={route}
              scroll={(el) => scrollWidthOffset(el)}
              color="inherit"
            >
              <Button color="primary" variant="text">
                {t(name)}
              </Button>
            </HashLink>
          );
        } else {
          return (
            <NavLink
              key={i}
              to={route}
              onClick={() => scrollToTop()}
              color="inherit"
            >
              <Button
                color="primary"
                variant="text"
                sx={{ textDecoration: "none" }}
              >
                {t(name)}
              </Button>
            </NavLink>
          );
        }
      })}
    </>
  );
}
export default MyLinks;
