import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  
  const SocialButton = ({children, label, href}) => {
    return (
      <chakra.button
        bg={'blackAlpha.100'}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: '#F0DB26',
          color: 'gray.900'
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        maxH={'10vh'}
        bg={'gray.900'}
        color={'gray.200'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'flex-end' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Gmail'} href={'https://ariadnaruvini.r@gmail.com'}>
              <FaGoogle />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/ariadna-ruvini'}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/AritaRuv'}>
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }