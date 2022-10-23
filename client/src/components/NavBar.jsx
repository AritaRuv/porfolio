import { Box, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

function NavBar(){
    return(
        <>
        <Box
        h={'8vh'}
        >
        <IconButton
        variant={'unstyled'}
        display={'flex'}
        size={'lg'}
        icon={<HamburgerIcon/>}
        float={'right'}
        pr={'03vh'}/>
        

        </Box>
        </>
    )
}

export default NavBar