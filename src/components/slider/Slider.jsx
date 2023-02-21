import React from "react";
import Carousel from "react-material-ui-carousel";

import SliderItem from "./SliderItem";

function Slider() {
  const items = [
    {
      name: "Random Name #1",

      photo: "/img/b-1.jpg",
    },
    {
      name: "Random Name #2",

      photo: "/img/b-2.jpg",
    },
    {
      name: "Random Name #2",

      photo: "/img/b-3.jpg",
    },
  ];

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
      sx={{ aspectRatio: "2.6" }}
    >
      {items.map((item, i) => (
        <SliderItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Slider;
