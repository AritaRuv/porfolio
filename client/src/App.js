import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from './views/LandingPage';
import About from './views/About.jsx';
import theme from './theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div className='app'>
          <NavBar/>
          <Routes>
            <Route exact path='/home' element={<LandingPage/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
