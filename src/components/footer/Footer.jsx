import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import "./Footer.css";
import { ButtonGroup, Grid } from "@mui/material";

function Footer() {
  return (
    <Box>
      <Grid container direction="row" justifyContent="center">
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>Light</Button>
          <Button>Dark</Button>
        </ButtonGroup>
      </Grid>
    </Box>
  );
}

export default Footer;
