import { Text, Box } from "@chakra-ui/react";
import { useState } from "react";


function Who(){
    const [text, setText] = useState('WHO')

    return(
        <>
        <Box>
        <Text
        fontFamily={'sans-serif'}
        fontWeight={'extrabold'}
        fontSize={'100px'}
        onMouseEnter={()=>setText('ABOUT')}
        onMouseLeave={()=>setText('WHO')}
        userSelect={'none'}
        _hover={{
            color: '#B2C413'
        }}
        >{text}</Text>
        </Box>
        </>
    )
}
export default Who


