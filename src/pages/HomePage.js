import { Container, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Topbar from '../components/Topbar'
import Landing from '../components/homePageComponents/Landing';
import TherapyBanner from '../components/homePageComponents/TherapyBanner';
import WhyChooseUs from '../components/homePageComponents/WhyChooseUs';
import Questions from '../components/homePageComponents/Questions';
import Footer from '../components/Footer';


// #00a693 (a dark greenish-blue)
// #45b1e8 (a bright sky blue)
// #ff9900 (a bold orange)
// #ff4d4d (a vibrant red)

// Light Gray (#F5F5F5) 
// Beige (#F5F5DC)
// Light Blue (#E6F3F7) 

// original colors
// 00a99d (PANTONE 3272)  // greenish
// f36523 (PANTONE 171)   // orange
// f70809 (PANTONE 485)   // red
// 3fa9f5 (PANTONE 279 C) // blue


const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
      light: '#eeeeee',
      dark: '#00a99d',
    },
    secondary: {
      main: '#3fa9f5',
    },
  },
  typography: {
    h1: {
      color: '#3fa9f5',
      fontSize: '10vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h2: {
      color: 'blue',
    },
    h3: {
      color: '#4ebaf4',
      fontSize: '1.5rem'
    },
    h4: {
      color: 'red',
    },
    h5: {
      color: 'blue',
    },
    h6: {
      color: '#777777',
      fontSize: '3vh',
      '@media (max-width: 768px)': {
        fontSize: '3vw',
      },

    },
    body1: {
      color: '#777777',
      fontSize: '2.3vh'
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <Topbar />
        <Landing />
        <WhyChooseUs />
        <Questions />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}