import { Text, Box } from "@chakra-ui/react";
import { useState } from "react";


function Where(){
    const [text, setText] = useState('WHERE')

    return(
        <>
        <Box maxW={'min-content'}>
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
        </>
    )
}
export default Where


//#B2C413
//#D9C519
//#F0DB26
