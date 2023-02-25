import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import "./Footer.css";
import { Grid } from "@mui/material";
import { ThemeContext } from "../..";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation("common");

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
          marginLeft="20px"
          display="flex"
        >
          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <Button
                onClick={toggleTheme}
                variant="contained"
                sx={{
                  borderColor: "primary.main",
                  marginRight: "10px",
                }}
              >
                {t("footer.mode")} {theme}
              </Button>
            )}
          </ThemeContext.Consumer>
          <Button
            onClick={() => changeLanguage("en")}
            sx={{
              borderColor: "primary.main",
              marginRight: "10px",
            }}
            variant="contained"
          >
            En
          </Button>
          <Button
            onClick={() => changeLanguage("es")}
            variant="contained"
            sx={{
              borderColor: "primary.main",
              marginRight: "10px",
            }}
          >
            Es
          </Button>
          <Button
            onClick={() => changeLanguage("fr")}
            variant="contained"
            sx={{
              borderColor: "primary.main",
              marginRight: "10px",
            }}
          >
            Fr
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
