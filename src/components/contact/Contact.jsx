import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import "./Contact.css";
import { Controller, useForm } from "react-hook-form";
import * as React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import SimpleDialog from "./SimpleDialog";
import { useTranslation } from "react-i18next";

const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function Contact() {
  const { t } = useTranslation("reserve");
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      day: moment(), // Si no volem possar cap dia: null
      time: "",
    },
  });

  const [open, setOpen] = React.useState(false);
  const [okey, setOkey] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(errors);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setValue("time", value);
    clearErrors("time");
  };

  const onSubmit = (value) => {
    setIsLoading(true);
    fetch("https://formsubmit.co/ajax/7c4897862c5bc8f29c38a5e5342032ba", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setOkey(
            "Muchas gracias, en confirmar su reserva le avisaremos por email."
          );
          reset(); // Hacer el reset del formulario
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoading(false);
          setError(
            "¡Se ha producido un error! Por favor inténtalo de nuevo más tarde."
          );
        }
      );
  };

  console.log(errors);

  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item={true} xs={12} sm={6} md={4}>
          <Box>
            <h1>{t("schedule.title")}</h1>
            <p>{t("schedule.text1")}</p>
            <p>{t("schedule.text2")}</p>
            <p>{t("schedule.text3")}</p>
            <p>{t("schedule.text4")}</p>
            <p>{t("schedule.text5")}</p>
            <p>{t("schedule.text6")}</p>
            <p>{t("schedule.text7")}</p>
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <h1>{t("reserve.title")}</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                maxWidth: "100%",
                marginBottom: "10px",
              }}
            >
              <TextField
                label={t("reserve.prenom")}
                variant="outlined"
                name="name"
                size="small"
                error={!!errors.name}
                helperText={errors?.name?.message}
                color="primary"
                fullWidth
                sx={{ marginBottom: "10px" }}
                inputProps={register("name", {
                  required: {
                    value: true,
                    message: "A name is required",
                  },
                  maxLength: {
                    value: 100,
                    message: "The name is too long",
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
                label={t("reserve.email")}
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
                    message: "The name is too long",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "A valid email is required",
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
                label={t("reserve.number")}
                variant="outlined"
                name="phone"
                size="small"
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                color="primary"
                fullWidth
                sx={{ marginBottom: "10px" }}
                inputProps={register("phone", {
                  required: {
                    value: true,
                    message: "Phone is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Invalid Phone",
                  },
                  maxLength: {
                    value: 12,
                    message: "Invalid Phone",
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
                    label={t("reserve.people")}
                    select
                    fullWidth
                    size="small"
                    defaultValue=""
                    error={!!errors.people}
                    helperText={errors?.people?.message}
                    inputProps={register("people", {
                      required: {
                        value: true,
                        message: "People required",
                      },
                    })}
                  >
                    {people.map((x) => (
                      <MenuItem key={x} value={x}>
                        {x}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>

              <Grid item={true} xs={5}>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Controller
                      name="day"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "Date required",
                        },
                      }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error, invalid },
                      }) => (
                        <MobileDatePicker
                          label="Date"
                          disablePast
                          inputFormat="DD-MM-YYYY"
                          value={value}
                          onChange={(value) => onChange(moment(value))}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              error={!!errors.day}
                              helperText={errors?.day?.message}
                              fullWidth
                              size="small"
                            />
                          )}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item={true} xs={3}>
                <Box>
                  <TextField
                    fullWidth
                    value={getValues("time")}
                    label={t("reserve.hour")}
                    size="small"
                    variant="outlined"
                    onClick={handleClickOpen}
                    error={!!errors.time}
                    helperText={errors?.time?.message}
                    InputProps={register("time", {
                      required: {
                        value: true,
                        message: "Time required",
                      },
                    })}
                  />
                </Box>
                <SimpleDialog
                  selectedValue={getValues("time")}
                  open={open}
                  onClose={handleClose}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                marginBottom: "10px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                disabled={isLoading}
                sx={{ marginTop: "8px" }}
              >
                {t("reserve.send")}
                {isLoading && (
                  <CircularProgress sx={{ marginLeft: "16px" }} size={20} />
                )}
              </Button>
              <div>
                {okey && (
                  <Alert sx={{ marginTop: "16px" }} severity="success">
                    {okey}
                  </Alert>
                )}
              </div>
              <div>
                {error && (
                  <Alert sx={{ marginTop: "16px" }} severity="error">
                    {error}
                  </Alert>
                )}
              </div>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
