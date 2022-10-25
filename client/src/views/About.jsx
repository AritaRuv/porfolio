import { Flex, Text } from '@chakra-ui/react'
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar.jsx'

const About = () => {
    return(
        <>
        <NavBar/>
        <Flex h={'81vh'}>
            <Flex pl={'5vh'} pt={'10vh'} w={'45vw'} textAlign={'justify'}>
            <Text>
                Hi! I'm Ariadna Ruvini. Normally I would say I'm a FULLSTACK WEB DEVELOPER, but the truth is that I consider myself an ARTIST.
                Why is that? Since I was a kid I loved to CREATE and DESING. At first I started making sculptures and drawings, later on as a teeneage I did a technic bachelor in Tecnic Architecture, followed by a degree in Arquitecture at the university. After studiying for 5 years, I realized that the day-to-day in an Architect life wasn't what I expected. I took some Graphic Design courses, I learned photography, but I was still looking for something that allows me to desing, think and challege myself with new knowledge day by day. Luckily I had a talk with a friend who told me about coding and all the oportunities this profesion has. Long story short, I started a bootcamp at HENRY that for me, was MINDBLOWING. 
                Never thought before in becoming a developer, and I don't regret it. After all we are more than just one sentence.
            </Text>
            </Flex>
        </Flex>
        <Footer/>
        </>
    )
}

export default About