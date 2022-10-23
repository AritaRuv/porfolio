import { Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Who(){
    const [text, setText] = useState('WHO')
    
    return(
        <Box maxW={'min-content'}>
          <Text
            fontFamily={'sans-serif'}
            fontWeight={'extrabold'}
            fontSize={'15vh'}
            onMouseEnter={()=>setText('ABOUT')}
            onMouseLeave={()=>setText('WHO')}
            userSelect={'none'}
            _hover={{
              color: '#B2C413'
            }}
            >
              <Link to='/about'>
                {text}
              </Link>
          </Text>
        </Box>
    )
}
export default Who


