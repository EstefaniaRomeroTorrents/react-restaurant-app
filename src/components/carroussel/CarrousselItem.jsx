import { Paper } from "@mui/material";
import "./CarrousselItem.css";

function CarrousselItem(props) {
  return (
    <Paper>
      <img
        className="img-responsive"
        src={props.item.img}
        alt="Foto"
        height="613"
        width="1600"
        style={{ aspectRatio: props.aspectRatio }}
      />
    </Paper>
  );
}
export default CarrousselItem;
