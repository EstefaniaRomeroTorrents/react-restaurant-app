import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import "./Footer.css";
import { Grid } from "@mui/material";
import { ThemeContext } from "../..";

function Footer() {
  return (
    <Box>
      <Grid container direction="row" justifyContent="center">
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => (
            <Button onClick={changeTheme}>{theme}</Button>
          )}
        </ThemeContext.Consumer>
      </Grid>
    </Box>
  );
}

export default Footer;
