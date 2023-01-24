import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import "./Carte.css";
function Carte() {
  return (
    <Box
      sx={{ background: "#f8e8d6", position: "relative", overflow: "hidden" }}
    >
      <Container className="home-carte">
        <Box className="fish">
          <div>
            <img src="/img/p-1.png" alt="" />
            <img src="/img/p-2.png" alt="" />
            <img src="/img/p-3.png" alt="" />
            <img src="/img/p-4.png" alt="" />
            <img src="/img/p-5.png" alt="" />
            <img src="/img/p-6.png" alt="" />
            <img src="/img/p-7.png" alt="" />
            <img src="/img/p-8.png" alt="" />
          </div>
        </Box>
        <Box className="fish-carte">
          <Typography variant="h2" align="center">
            La Carte
          </Typography>
          <Grid container direction="row" justifyContent="center">
            <Grid item={true} xs={10} md={8} lg={5}>
              <div className="menuMer">
                <Typography variant="h3">Menú de la Mer</Typography>
                <Typography variant="h5" className="menuh5">
                  SERVI SEULEMENT AU DÉJEÛNER
                </Typography>
                <Typography variant="h6">
                  55 <EuroOutlinedIcon />
                </Typography>
                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    <p>
                      Thon germon en tartare , concombre et coriandre <br />
                      ou Sardine en beignet , tomate et menthe
                    </p>
                    <p>
                      Lotte tiède aux herbes d’été <br /> ou palourdes à l’ail
                    </p>
                    <p>
                      Gâteau au chocolat <br /> ou salade d’agrumes
                    </p>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Carte;
