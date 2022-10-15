import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route exact path='/home' element={<LandingPage/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
