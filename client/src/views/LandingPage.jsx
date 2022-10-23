import How from '../components/How';
import Who from '../components/Who';
import Navbar from '../components/NavBar';
import Where from '../components/Where';
import Footer from '../components/Footer'
import { Flex } from '@chakra-ui/react';


function LandingPage(){
    return(
      <>
      <Navbar/>
        <Flex 
          flexDir={'column'} 
          pl={'10vh'} 
          h={'81vh'} 
          placeContent={'end'} 
          >
            <Who/>
            <How/>
            <Where/>
        </Flex>
        <Footer/>
      </>
    )
}

export default LandingPage