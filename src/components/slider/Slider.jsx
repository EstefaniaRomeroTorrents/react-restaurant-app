import React from "react";
import Carousel from "react-material-ui-carousel";

import SliderItem from "./SliderItem";

function Slider() {
  const items = [
    {
      name: "Random Name #1",

      photo: "http://restaurantleduc.com/wp-content/uploads/2015/03/4.jpg",
    },
    {
      name: "Random Name #2",

      photo: "http://restaurantleduc.com/wp-content/uploads/2015/03/5.jpg",
    },
    {
      name: "Random Name #2",

      photo: "http://restaurantleduc.com/wp-content/uploads/2015/03/6.jpg",
    },
    {
      name: "Random Name #2",

      photo: "http://restaurantleduc.com/wp-content/uploads/2015/03/2.jpg",
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
