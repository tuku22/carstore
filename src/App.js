import './App.css';
import Carlist from './components/Carlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="6">
            My Carshop
          </Typography>
        </Toolbar>
      </AppBar>

      <Carlist />
    </div>
  );
}

export default App;