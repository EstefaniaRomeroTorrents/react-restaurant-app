import Carousel from "react-material-ui-carousel";
import "./Carroussel.css";
import CarrousselItem from "./CarrousselItem";
function Carroussel({ items, aspectRatio }) {
  return (
    <Carousel
      animation="slide"
      changeOnFirstRender={false}
      cycleNavigation={true}
      fullHeightHover={true}
      autoPlay={false}
      duration={500}
      navButtonsAlwaysVisible
      indicatorContainerProps={{
        style: {
          bottom: "20px",
          textAlign: "center",
          position: "absolute",
          zIndex: "5",
        },
      }}
      sx={{ aspectRatio: aspectRatio }}
    >
      {items.map((item, i) => (
        <CarrousselItem key={i} item={item} aspectRatio={aspectRatio} />
      ))}
    </Carousel>
  );
}
export default Carroussel;
