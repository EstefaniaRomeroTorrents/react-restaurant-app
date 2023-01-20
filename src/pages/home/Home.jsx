import "./Home.css";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Carte from "../../components/carte/Carte";
import { Box } from "@mui/system";
import Restaurant from "../../components/restaurant/Restaurant";

function Home() {
  return (
    <>
      <Box style={{ marginTop: "124px" }}>
        <Header />
      </Box>
      <Slider />
      <Restaurant />
      <Carte />
    </>
  );
}

export default Home;
