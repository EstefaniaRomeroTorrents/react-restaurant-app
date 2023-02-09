import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import "./Footer.css";
import { Grid } from "@mui/material";
import { ThemeContext } from "../..";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Box>
      <Grid container direction="row" justifyContent="center">
        <Grid
          item={true}
          xs={10}
          md={8}
          lg={5}
          paddingBottom="30px"
          paddingTop="30px"
        >
          <ThemeContext.Consumer>
            {({ theme, changeTheme }) => (
              <Button onClick={changeTheme}>{theme}</Button>
            )}
          </ThemeContext.Consumer>
          <Button onClick={() => changeLanguage("en")}>En</Button>
          <Button onClick={() => changeLanguage("es")}>Es</Button>
          <Button onClick={() => changeLanguage("fr")}>Fr</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
