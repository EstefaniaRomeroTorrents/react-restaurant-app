import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import * as React from "react";

import { useTranslation } from "react-i18next";

function Contacter() {
  const { t } = useTranslation("home");

  return (
    <Container maxWidth="lg" sx={{ marginTop: "10px" }} id="contact">
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item={true} xs={12} sm={6} md={4}>
          <Box>
            <h2>{t("c_restaurante.titulo.seccion")}</h2>
            <h3>{t("c_restaurante.titulo.nombre_restaurante")}</h3>
            <h4>
              {t("c_restaurante.texto.calle_restaurante")}{" "}
              {t("c_restaurante.texto.codigo_postal")}
            </h4>
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <h5>
            {t("c_restaurante.texto.dias")}
            {t("c_restaurante.texto.telefono_1")}
          </h5>

          <h5>
            {t("c_restaurante.texto.horario")}
            {t("c_restaurante.texto.telefono_3")}
          </h5>

          <h5>{t("c_restaurante.texto.correo")}</h5>
          <Box>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contacter;
