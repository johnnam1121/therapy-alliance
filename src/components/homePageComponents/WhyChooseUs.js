import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import stock from '../../pictures/stockimg.jpg'

export default function WhyChooseUs() {
  const whyChooseUs = { textAlign: 'center', height: '40vh', alignItems: 'center' };
  const imgRow = { textAlign: 'center', pl: '7vw', pr: '7vw', alignItems: 'center', height: '90vh' }

  return (
    <Box sx={{ backgroundColor: 'primary.light' }}>
      <Box sx={{
        flexGrow: 1,
        backgroundColor: 'primary.dark',
      }}>
        <Grid container sx={whyChooseUs} spacing={2}>
          <Grid item xs={false} sm={3} />
          <Grid item xs={12} sm={6}>
            <Typography variant='h1' sx={{ textAlign: 'center', fontWeight: 'bold', mb: '5vh', color: '#333333' }}>
              Why Choose Us
            </Typography>
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              Here at TD Therapy Alliance, we take pride in developing our staff in order to
              provide the best quality services for our patients
            </Typography>
          </Grid>
          <Grid item xs={false} sm={3} />
        </Grid>
      </Box>

      <Box>
        <Grid container sx={imgRow} spacing={5}>
          <Grid item xs={4} md={4}>
            <img src={stock} alt='stock image' style={{ height: '15vh', marginBottom: '3vh', borderRadius: '50%' }} />
            <Typography variant='h3' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={stock} alt='stock image' style={{ height: '15vh', marginBottom: '3vh', borderRadius: '50%' }} />
            <Typography variant='h3' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={stock} alt='stock image' style={{ height: '15vh', marginBottom: '3vh', borderRadius: '50%' }} />
            <Typography variant='h3' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}