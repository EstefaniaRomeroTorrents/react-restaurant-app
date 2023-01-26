import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import "./Carte.css";
function Carte() {
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
      <Container className="home-carte">
        <Box className="fish-carte">
          <Typography variant="h2" align="center">
            La Carte
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
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="end"
            textAlign="left"
          >
            <Grid item={true} xs={10} md={8} lg={4}>
              <div className="menuMer">
                <Typography variant="h6">Poissons crus</Typography>

                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    <p>
                      Tartare de Bar et <br /> Saumon 20€
                    </p>
                    <p>Saumon au naturel 25€</p>
                    <p>
                      Escalopes de Saumon <br /> aux deux poivres 17€
                    </p>
                    <p>
                      Coquilles Saint- <br />
                      Jacques crues 40€
                    </p>
                    <p>Bar cru 25€</p>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid item={true} xs={10} md={8} lg={6}>
              <div className="menuMer">
                <Typography variant="h2">Les entrées</Typography>
                <Typography variant="h6">Poissons</Typography>

                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    <p>Assortiment de poissons fumés, tièdes 30€</p>
                    <p>
                      Escalope de Lotte tiède à l'huile d'olive et citron vert
                      30€
                    </p>
                    <p>Friture d'Encornets nature 28€</p>
                    <p>Encornets poêlés à l'ail 28€</p>
                    <p>Thon blanc à l'huile d'olive douce 30€</p>
                    <p>Sardines à l'escabèche 25€</p>
                  </div>
                </Grid>
                <Typography variant="h6">Coquillages & crustacés</Typography>
                <Grid item={true} xs={10} md={8} lg={12}>
                  <div className="pMenu">
                    <p>Les Huîtres spéciales tièdes 40€</p>
                    <p>Les Huîtres spéciales n°3 (la douzaine) 48€</p>
                    <p>Les Huîtres de Belon (la 1/2 douzaine) 60€</p>
                    <p>Moules marinières 25€</p>
                    <p>Moules poêlées Madras 25€</p>
                    <p>Palourdes sautées au thym 35€</p>
                    <p>Salade de Crabe frais 40€</p>
                    <p>Queues de Langoustines aux douces épices 60€</p>
                    <p>Langoustines soufflées nature 60€</p>
                    <p>Langoustines mayonnaise 60€</p>
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
