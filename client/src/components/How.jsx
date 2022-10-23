import { Text, Box } from "@chakra-ui/react";
import { useState } from "react";


function How(){
    const [text, setText] = useState('HOW')



    return(
        <>
        <Box maxW={'min-content'}>
        <Text
        fontFamily={'sans-serif'}
        fontWeight={'extrabold'}
        fontSize={'15vh'}
        onMouseEnter={()=>setText('PROJECTS')}
        onMouseLeave={()=>setText('HOW')}
        userSelect={'none'}
        _hover={{
            color: '#DBF026'
        }}
        >{text}</Text>
        </Box>
        </>
    )
}
export default How


//#B2C413
//#D9C519
//#F0DB26
