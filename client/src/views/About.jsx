import { Flex, Text } from '@chakra-ui/react'
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar.jsx'

const About = () => {
    return(
        <>
        <NavBar/>
        <Flex h={'81vh'}>
            <Text>
                Hi! I'm Ariadna Ruvini. Normally I will say I'm a FULLSTACK WEB DEVELOPER, but the truth is that I consider myself an ARTIST.
                And why is that? Since I was a kid I loved to CREATE and DESING. At first I started making sculptures and drawings, later as a teen I did a technic bachelor in Tecnic Architect, followed to Arquitecture in the university. After studiying for 5 years, I found that the day-to-day in an Architect life wasn't what I expected. I made some Graphic Design courses, I learned photography, but I was still looking for this something thay allows me to desing, think and challege myself with new knowledge day by day.
                Never thought before in becoming a developer, and I don't regret it. After all we are more than just one sentence.
                </Text>
        </Flex>
        <Footer/>
        </>
    )
}

export default About