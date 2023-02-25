import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function Restaurant() {
  const { t } = useTranslation("home");
  return (
    <Container maxWidth="lg" id="restaurante">
      <Grid container spacing={2}>
        <Grid item={true} xs={12} sm={6} md={4}>
          <Typography variant="h3">{t("restaurant.title")}</Typography>
        </Grid>

        <Grid item={true} xs={12} sm={6} md={4}>
          <p>{t("restaurant.text1")}</p>
          <p>{t("restaurant.text2")}</p>
          <p>{t("restaurant.text3")}</p>
          <p>{t("restaurant.text4")}</p>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <p>{t("restaurant.text5")}</p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Restaurant;
