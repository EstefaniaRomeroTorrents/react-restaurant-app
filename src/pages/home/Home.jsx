import "./Home.css";

import Carte from "../../components/carte/Carte";

import Restaurant from "../../components/restaurant/Restaurant";
import Histoire from "../../components/histoire/Histoire";
import Carroussel from "../../components/carroussel/Carroussel";
import Maps from "../../components/maps/Maps";
import { Container } from "@mui/material";

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

      img: "/img/b-1.jpg",
    },
    {
      name: "Random Name #2",

      img: "/img/b-2.jpg",
    },
    {
      name: "Random Name #2",

      img: "/img/b-3.jpg",
    },
  ];

  return (
    <>
      <Carroussel items={itemsA} aspectRatio="2.6" />
      <Restaurant />
      <Carte />
      <Histoire />
      <Container>
        <Carroussel items={itemsB} aspectRatio="2.3" />
      </Container>
      <Maps />
    </>
  );
}

export default Home;
