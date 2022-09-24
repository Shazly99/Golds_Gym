import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
 
function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}  }} m='auto'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;