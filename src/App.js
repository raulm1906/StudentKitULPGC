import './App.css';

import { Grid, GridItem } from '@chakra-ui/react'

import RegisterForm from './components/RegisterForm';
import RegisterPortada from './components/RegisterPortada';

import LoginForm from './components/LoginForm';

import Profesorado from './components/Profesorado';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Grid templateColumns='repeat(6, 1fr)' gap={5}>
        <GridItem colSpan={3}>
          <RegisterForm  />
        </GridItem>
        <GridItem colSpan={3}>
          <RegisterPortada />
        </GridItem>
      </Grid>
    </div>
  );
}

function DisplayPage() {
  return (
    <Footer />
  )
}

export default DisplayPage;