import { Box } from "@mui/system";
import "./Maps.css";

function Maps() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11947.973306970516!2d2.4313856!3d41.5260852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b4e4409e0875%3A0xc9fbf03a1384100b!2sFundaci%C3%B3%20TecnoCampus%20Matar%C3%B3-Maresme!5e0!3m2!1ses!2ses!4v1674755635259!5m2!1ses!2ses"
        width="100%"
        height="500"
        style={{ border: "none" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="mapa"
      ></iframe>
    </Box>
  );
}

export default Maps;
