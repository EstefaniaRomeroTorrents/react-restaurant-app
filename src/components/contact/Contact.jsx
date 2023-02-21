import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./Contact.css";
import { useForm } from "react-hook-form";
import * as React from "react";
import { ErrorMessage } from "@hookform/error-message";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
          <h1>Reservar Mesa</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <input
                fullWidth
                type="text"
                placeholder="First name"
                {...register("Firstname", {
                  required: "Se requiere un nombre.",
                  maxLength: 80,
                  /*pattern: {
                    value: /\d+/,
                    message: "This input is number only.",
                  },
                  minLength: {
                    value: 11,
                    message: "This input must exceed 10 characters",
                  },*/
                })}
              />
              {errors.Firstname && <p>{errors.Firstname.message}</p>}
            </Box>
            <Box>
              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: "Se requiere un Email.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Se requiere un EMail correcto.",
                  },
                })}
              />
              {errors.Email && <p>{errors.Email.message}</p>}
            </Box>
            <Box>
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobilenumber", {
                  required: "Se requiere un número de teléfono.",
                  minLength: 6,
                  maxLength: 12,
                  pattern: {
                    value: /\d+/,
                    message: "Se requiere sólo números.",
                  },
                })}
              />
              {errors.Mobilenumber && <p>{errors.Mobilenumber.message}</p>}
            </Box>
            <Box>
              <input
                type="number"
                placeholder="Persons"
                {...register("persons", {
                  valueAsNumber: true,
                  required: "Se requiere un número de personas.",
                  pattern: {
                    value: /\d+/,
                    message: "Se requiere sólo números.",
                  },
                })}
              />
              {errors.persons && <p>{errors.persons.message}</p>}
            </Box>
            <ErrorMessage
              errors={errors}
              name="multipleErrorInput"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Date "
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />

                <TimePicker
                  label="Time"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            <input type="submit" />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
