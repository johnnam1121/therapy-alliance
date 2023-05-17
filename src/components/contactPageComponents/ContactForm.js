import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import axios from "axios";
import React, { useState } from "react";

export default function ContactForm() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    axios
      .post("https://formsubmit.co/johnnam93@gmail.com", formData)
      .then((response) => {
        console.log(response);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while sending the message.");
      });
  };

  const buttonStyles = {
    color: '#ffffff',
    backgroundColor: '#00a99d',
    '&:hover': { backgroundColor: '#f36523' },
    fontSize: isMobile ? '4vw' : '1vw',
    borderRadius: '10%'
  }

  return (
    <Grid container spacing={2} sx={{ backgroundColor: 'primary.light', px: '10vw', py: '5vh', }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3">
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <form action="https://formspree.io/f/meqwdnng" method="POST">
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            multiline
            rows={4}
            fullWidth
            required
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
            sx={buttonStyles}
          >
            Send
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ px: isMobile ? '0' : '3vw' }}>
          <Typography variant="h4" sx={{ mb: '3vh', mt: isMobile ? '3vh' : '0' }}>
            Job Seekers
          </Typography>
          <Typography variant="h5" sx={{ color: '#555555', mb: '5vh' }}>
            Call (713) 838-2256 to have a direct conversation with a recruiter
            regarding career opportunities or complete our Contact Form.
          </Typography>
          <Typography variant="h4" sx={{ mb: '3vh' }}>
            Request Staffing
          </Typography>
          <Typography variant="h5" sx={{ color: '#555555', mb: '5vh' }}>
            Please Call (713) 838-2256 in order to find out how TD Therapy alliance
            can meet your staffing needs or complete our Contact Form.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
