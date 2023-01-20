import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
function Restaurant() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item={true} xs={12} sm={6} md={4}>
          <Typography variant="h2">Restaurant Le Duc</Typography>
        </Grid>

        <Grid item={true} xs={12} sm={6} md={4}>
          <p>Finies les vacances ,nous sommes de retour !!!!!!!</p>
          <p>
            Le restaurant est ouvert du lundi au samedi pour déjeuner et diner.
          </p>
          <p>
            En temps normal, Nous prenons les réservations au 01 43 22 59 59 et
            au 01 43 20 96 30 .Le week end et pendant la pause , 06 23 79 32 36
            ou dominique.minchelli@restaurantleduc.com.
          </p>
          <p>Vous pouvez aussi visiter notre instagram</p>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <p>
            Restaurant de poissons et fruits de mer depuis 1967, Le Duc est un
            rendez vous gastronomique immanquable pour tout amateur de bonne
            pêche. Un lieu de caractère installé à deux pas des ateliers de
            César et Dali, dont la carte se dessine suivant les arrivages
            journaliers.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Restaurant;
