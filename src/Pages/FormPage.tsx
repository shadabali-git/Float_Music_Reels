import React, { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography,Box } from '@mui/material';

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emailRef.current?.value;

    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      navigate('/second');
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <>
     <Container maxWidth="sm">
     <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            p: 4, // Adds padding to the Box
            bgcolor: 'background.paper', // Sets background color
            boxShadow: 1, // Adds a shadow
            borderRadius: 1, // Adds a border radius
          }}
        >
        
      <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>
        User Information Form
        
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" inputRef={nameRef} fullWidth margin="normal" required />
        <TextField label="Phone Number" inputRef={phoneRef} fullWidth margin="normal" required />
        <TextField label="Email" inputRef={emailRef} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
       </Box>
    </Container>
    </>
   
  );
};

export default FormPage;
