import { Grid, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import "./Carte.css";
function Carte() {
  const { t } = useTranslation("home");
  return (
    <Box
      sx={{ background: "#f8e8d6", position: "relative", overflow: "hidden" }}
    >
      <Box className="fish">
        <img className="fish-1" src="/img/p-1.png" alt="" />
        <img className="fish-2" src="/img/p-2.png" alt="" />
        <img className="fish-3" src="/img/p-3.png" alt="" />
        <img className="fish-4" src="/img/p-4.png" alt="" />
        <img className="fish-5" src="/img/p-5.png" alt="" />
        <img className="fish-6" src="/img/p-6.png" alt="" />
        <img className="fish-7" src="/img/p-7.png" alt="" />
        <img className="fish-8" src="/img/p-8.png" alt="" />
      </Box>
      <Container className="home-carte" id="carta">
        <Box className="fish-carte">
          <Typography variant="h2" align="center">
            {t("carte.title")}
          </Typography>
          <Grid container direction="row" justifyContent="center">
            <Grid
              item={true}
              xs={10}
              md={8}
              lg={5}
              paddingBottom="30px"
              paddingTop="30px"
            >
              <Box
                className="menuMer"
                sx={{
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography variant="h3">
                  {t("carte.menu_de_la_mer.title")}
                </Typography>
                <Typography variant="h5" className="menuh5">
                  {t("carte.menu_de_la_mer.subtitle")}
                </Typography>
                <Typography variant="h6">
                  {t("carte.menu_de_la_mer.price")}
                </Typography>
                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    <p>
                      {t("carte.menu_de_la_mer.text1")}
                      <br />
                      {t("carte.menu_de_la_mer.text2")}
                    </p>
                    <p>
                      {t("carte.menu_de_la_mer.text3")} <br />{" "}
                      {t("carte.menu_de_la_mer.text4")}
                    </p>
                    <p>
                      {t("carte.menu_de_la_mer.text5")} <br />{" "}
                      {t("carte.menu_de_la_mer.text6")}
                    </p>
                  </div>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="end"
            textAlign="left"
          >
            <Grid item={true} xs={10} md={8} lg={4}>
              <Box
                className="menuMer"
                sx={{
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography variant="h6">
                  {t("carte.les_entrees.section_03.title_03")}
                </Typography>

                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    {t("carte.les_entrees.section_03.dishes", {
                      returnObjects: true,
                    }).map((value, index) => (
                      <tr key={index}>
                        <td>{value.name}</td>
                        <td className="price">{value.price}€</td>
                      </tr>
                    ))}
                  </div>
                </Grid>
              </Box>
            </Grid>
            <Grid item={true} xs={10} md={8} lg={6}>
              <Box
                className="menuMer"
                sx={{
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography variant="h2">
                  {t("carte.les_entrees.title")}
                </Typography>
                <Typography variant="h6">
                  {t("carte.les_entrees.section_01.title_01")}
                </Typography>

                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    {t("carte.les_entrees.section_01.dishes", {
                      returnObjects: true,
                    }).map((value, index) => (
                      <tr key={index}>
                        <td>{value.name}</td>
                        <td className="price">{value.price}€</td>
                      </tr>
                    ))}
                  </div>
                </Grid>
                <Typography variant="h6">
                  {t("carte.les_entrees.section_02.title_02")}
                </Typography>
                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    {t("carte.les_entrees.section_02.dishes", {
                      returnObjects: true,
                    }).map((value, index) => (
                      <tr key={index}>
                        <td>{value.name}</td>
                        <td className="price">{value.price}€</td>
                      </tr>
                    ))}
                  </div>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Carte;
