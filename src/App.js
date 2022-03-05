import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="app">
      <LandingPage/>
    </div>
  );
}

export default App;
