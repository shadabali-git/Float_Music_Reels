// src/App.jsx
import React from 'react';
import { Container, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Intership Assignment
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <TextField label="Sample Input" variant="outlined" margin="normal" fullWidth />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is an example of a Material-UI dialog.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;
