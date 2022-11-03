import { Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";


function How(){
    const [text, setText] = useState('HOW')



    return(
        <Box>
        <Box 
        maxW={'min-content'}
        as={motion.div}
        initial={{x: '-200vh'}}
        animate={{x: 0}}
        transitionDuration='190ms'
        transitionDelay='220ms'
        >
        <Text
        fontFamily={'sans-serif'}
        fontWeight={'extrabold'}
        fontSize={'15vh'}
        onMouseEnter={()=>setText('PROJECTS')}
        onMouseLeave={()=>setText('HOW')}
        userSelect={'none'}
        transition={'0.1s ease-out'}
        _hover={{
            color: '#DBF026'
        }}
        >{text}</Text>
        </Box>
        </Box>
    )
}
export default How


//#B2C413
//#D9C519
//#F0DB26
