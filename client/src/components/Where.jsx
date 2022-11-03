import { Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";


function Where(){
    const [text, setText] = useState('WHERE')

    return(
        <Box>
        <Box 
        maxW={'min-content'}
        as={motion.div}
        initial={{x: '-200vh'}}
        animate={{x: 0}}
        transitionDuration='400ms'
        transitionDelay='400ms'>
        <Text
        fontFamily={'sans-serif'}
        fontWeight={'extrabold'}
        fontSize={'15vh'}
        onMouseEnter={()=>setText('CONTACT')}
        onMouseLeave={()=>setText('WHERE')}
        userSelect={'none'}
        _hover={{
            color: '#F0DB26'
        }}
        >{text}</Text>
        </Box>
        </Box>
    )
}
export default Where


//#B2C413
//#D9C519
//#F0DB26
