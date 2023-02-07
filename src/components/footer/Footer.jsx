import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import "./Footer.css";
import { Grid } from "@mui/material";
import { ThemeContext } from "../..";

function Footer() {
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
