import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./Contact.css";
import { useForm } from "react-hook-form";
import * as React from "react";

import TextField from "@mui/material/TextField";

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

          <form
            form
            onSubmit={handleSubmit(onSubmit)}
            action="https://formsubmit.co/7c4897862c5bc8f29c38a5e5342032ba"
            method="POST"
          >
            <Box
              sx={{
                maxWidth: "100%",
                marginBottom: "10px",
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                name="email"
                size="small"
                error={!!errors.name}
                helperText={errors?.name?.message}
                color="primary"
                fullWidth
                sx={{ marginBottom: "10px" }}
                inputProps={register("name", {
                  required: {
                    value: true,
                    message: "Se requiere un nombre",
                  },
                  maxLength: {
                    value: 100,
                    message: "El nombre es demasiado largo",
                  },
                })}
              />
            </Box>
            <Box
              sx={{
                width: 500,

                maxWidth: "100%",
                marginBottom: "10px",
              }}
            >
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                size="small"
                error={!!errors.email}
                helperText={errors?.email?.message}
                color="primary"
                fullWidth
                sx={{ marginBottom: "10px" }}
                inputProps={register("email", {
                  required: {
                    value: true,
                    message: "Se requiere un email",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Se requiere un emal válido",
                  },
                })}
              />
            </Box>
            <Box
              sx={{
                width: 500,

                maxWidth: "100%",
                marginBottom: "10px",
              }}
            >
              <TextField
                label="Number phone"
                variant="outlined"
                name="email"
                size="small"
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                color="primary"
                fullWidth
                sx={{ marginBottom: "10px" }}
                inputProps={register("phone", {
                  required: {
                    value: true,
                    message: "Se requiere un número de teléfono",
                  },
                  maxLength: {
                    value: 10,
                    message: "El nombre es demasiado largo",
                  },
                })}
              />
            </Box>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item={true} xs={4}>
                <Box>
                  <TextField
                    label="Persons"
                    variant="outlined"
                    name="email"
                    size="small"
                    type={"number"}
                    error={!!errors.persons}
                    helperText={errors?.persons?.message}
                    color="primary"
                    sx={{ marginBottom: "10px" }}
                    inputProps={register("persons", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                  />
                </Box>
              </Grid>

              <Grid item={true} xs={5}>
                <Box>
                  <TextField
                    label=""
                    variant="outlined"
                    name="email"
                    size="small"
                    format={"DD/MM/YYYY"}
                    type={"date"}
                    error={!!errors.date}
                    helperText={errors?.date?.message}
                    color="primary"
                    fullWidth
                    sx={{ marginBottom: "10px" }}
                    inputProps={register("date", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                  />
                </Box>
              </Grid>
              <Grid item={true} xs={3}>
                <Box>
                  <TextField
                    label=""
                    variant="outlined"
                    name="email"
                    size="small"
                    type={"time"}
                    error={!!errors.time}
                    helperText={errors?.time?.message}
                    color="primary"
                    fullWidth
                    sx={{ marginBottom: "10px" }}
                    inputProps={register("time", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                marginBottom: "10px",
              }}
            >
              <TextField
                label=""
                variant="outlined"
                name="email"
                size="small"
                type={"submit"}
                color="primary"
                fullWidth
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "#0a95ff",
                  borderColor: "#0a95ff",
                  borderRadius: "3px",
                }}
              />
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
