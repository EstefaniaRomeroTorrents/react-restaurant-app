import { Paper } from "@mui/material";
import "./SliderItem.css";

function SliderItem(props) {
  return (
    <Paper>
      <img className="imgSlider" src={props.item.photo} alt="Foto" />
    </Paper>
  );
}
export default SliderItem;
