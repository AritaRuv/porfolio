import { Text, Box} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Who(){
    const [text, setText] = useState('WHO')
    
    return(
      <Box>
        <Box 
        maxW={'min-content'}
        as={motion.div}
        initial={{x: '-200vh'}}
        animate={{x: 0}}
        transitionDuration='100ms'
        >
          <Text
            as={motion.text}
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
        </Box>
    )
}
export default Who


