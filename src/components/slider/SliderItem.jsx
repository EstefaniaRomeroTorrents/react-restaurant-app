import { Paper } from "@mui/material";
import "./SliderItem.css";

function SliderItem(props) {
  return (
    <Paper>
      <img
        className="img-responsive"
        src={props.item.photo}
        alt="Foto"
        height="613"
        width="1600"
      />
    </Paper>
  );
}
export default SliderItem;
