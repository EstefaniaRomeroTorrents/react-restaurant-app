import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./Contact.css";
import { useForm } from "react-hook-form";
import * as React from "react";
import moment from "moment";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [value, setValue] = React.useState(moment("2022-04-07"));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item={true} xs={12} sm={6} md={4}>
          <Box>
            <h1>Horario:</h1>
            <p>viernes 6:00–16:00, 18:00–24:00</p>
            <p>sábado 9:00–24:00</p>
            <p>domingo 9:00–18:00</p>
            <p>lunes 10:00–16:00</p>
            <p>martes 10:00–16:00</p>
            <p>miércoles 10:00–16:00</p>
            <p>jueves 10:00–16:00, 18:00–24:00</p>
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "table-caption",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Nombre completo"
                {...register("Nombre completo", {
                  required: true,
                  maxLength: 80,
                })}
              />
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <input
                type="number"
                placeholder="Personas"
                {...register("personas", { min: 1, max: 99 })}
              />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="DateTimePicker"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>

              <input type="submit" />
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
