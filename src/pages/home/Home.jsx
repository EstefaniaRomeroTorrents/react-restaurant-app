import "./Home.css";
import Header from "../../components/header/Header";

import Carte from "../../components/carte/Carte";
import { Box } from "@mui/system";
import Restaurant from "../../components/restaurant/Restaurant";
import Histoire from "../../components/histoire/Histoire";
import Carroussel from "../../components/carroussel/Carroussel";
import Maps from "../../components/maps/Maps";
import { Container } from "@mui/material";
import Footer from "../../components/footer/Footer";

function Home() {
  const itemsB = [
    {
      name: "Random Name #1",

      img: "/img/r-1.jpg",
    },
    {
      name: "Random Name #2",

      img: "/img/r-2.jpg",
    },
    {
      name: "Random Name #2",

      img: "/img/r-3.jpg",
    },
    {
      name: "Random Name #2",

      img: "/img/r-4.jpg",
    },
  ];
  const itemsA = [
    {
      name: "Random Name #1",

      img: "http://restaurantleduc.com/wp-content/uploads/2015/03/4.jpg",
    },
    {
      name: "Random Name #2",

      img: "http://restaurantleduc.com/wp-content/uploads/2015/03/5.jpg",
    },
    {
      name: "Random Name #2",

      img: "http://restaurantleduc.com/wp-content/uploads/2015/03/6.jpg",
    },
    {
      name: "Random Name #2",

      img: "http://restaurantleduc.com/wp-content/uploads/2015/03/2.jpg",
    },
  ];

  return (
    <>
      <Box style={{ marginTop: "124px" }}>
        <Header />
      </Box>
      <Carroussel items={itemsA} aspectRatio="2.6" />
      <Restaurant />
      <Carte />
      <Histoire />
      <Container>
        <Carroussel items={itemsB} aspectRatio="2.3" />
      </Container>
      <Maps />
      <Footer />
    </>
  );
}

export default Home;
