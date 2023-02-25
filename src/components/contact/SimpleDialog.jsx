import * as React from "react";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button, Grid } from "@mui/material";

const time = [
  "12:00",
  "12:30",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select the time</DialogTitle>
      <List sx={{ pt: 0 }}>
        <Grid container spacing={1} padding={3}>
          {time.map((t) => (
            <Grid item xs={4} key={t}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleListItemClick(t)}
              >
                {t}
              </Button>
            </Grid>
          ))}
        </Grid>
      </List>
    </Dialog>
  );
}

export default SimpleDialog;
