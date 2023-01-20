import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./Carte.css";
function Carte() {
  return (
    <Container className="home-carte">
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
      <div className="fish-carte">
        <Typography variant="h2">La Carte</Typography>
      </div>
    </Container>
  );
}

export default Carte;
