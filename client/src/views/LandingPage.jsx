import How from '../components/How';
import Who from '../components/Who';
import Where from '../components/Where';
import { Flex } from '@chakra-ui/react';


function LandingPage(){
    return(
      <>
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
      </>
    )
}

export default LandingPage