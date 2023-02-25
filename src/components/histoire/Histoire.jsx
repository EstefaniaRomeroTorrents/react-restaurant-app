import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import "./Histoire.css";
import { useTranslation } from "react-i18next";
function Histoire() {
  const { t } = useTranslation("home");
  return (
    <Container maxWidth="lg" id="historia">
      <Box>
        <Typography variant="h2" align="center">
          {t("histoire.lerestaurant")}
        </Typography>
        <Grid container spacing={2}>
          <Grid item={true} xs={12} sm={6} md={4}>
            <Box>
              <div className="img-container">
                <img src="/img/h-1.png" alt="" />
              </div>
              <Typography variant="h3" align="center">
                {t("histoire.historia")}
              </Typography>
              <p>{t("histoire.texthistoria")}</p>
            </Box>
          </Grid>

          <Grid item={true} xs={12} sm={6} md={4}>
            <Box>
              <div className="img-container">
                <img src="/img/h-2.png" alt="" />
              </div>
              <Typography variant="h3" align="center">
                {t("histoire.productos")}
              </Typography>
              <p>{t("histoire.textproductos")}</p>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={4}>
            <Box>
              <div className="img-container">
                <img src="/img/h-3.png" alt="" />
              </div>
              <Typography variant="h3" align="center">
                {t("histoire.equipo")}
              </Typography>
              <p>{t("histoire.textequipo")}</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Histoire;
