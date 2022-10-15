import How from '../components/How';
import Who from '../components/Who';
import Navbar from '../components/NavBar';
import Where from '../components/Where';
import { Box } from '@chakra-ui/react';


function LandingPage(){
    return(
      <>
      <Navbar/>
        <Box pl={'10vh'} spacing={'20vh'}>
            <Who/>
            <How/>
            <Where/>
        </Box>
      </>
    )
}

export default LandingPage