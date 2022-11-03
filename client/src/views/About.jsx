import { Flex, Text, Highlight, Heading } from '@chakra-ui/react';

const About = () => {
    return(
        <>
        <Flex 
					flexDir={'column'} 
					h={'81vh'}>
					<Heading 
						fontFamily={'sans-serif'} 
						fontWeight={'extrabold'} 
						pl={'5vw'}>WHO AM I?</Heading>
          <Flex 
						placeSelf={'flex-end'} 
						pr={'5vw'} 
						pt={'5vh'} 
						w={'45vw'} 
						textAlign={'justify'}>
            <Text fontSize={'larger'}>
            	<Highlight 
								query={['FULLSTACK WEB DEVELOPER','CREATE and DESING','Tecnic Architecture', ' Graphic Design','photography' ]} 		
								styles={{ 
									fontWeight: 'bold',  
									bg: 'rgba(178, 196, 19, 0.5)' 
									}}>
            		Since I was a kid I loved to CREATE and DESING. At first I started making sculptures and drawings, later on as a teeneage I did a technic bachelor in Tecnic Architecture, followed by a degree in Arquitecture at the university. After studiying for 5 years, I realized that the day-to-day in an Architect life wasn't what I expected. I took some Graphic Design courses, I learned photography, but I was still looking for something that allows me to desing, think and challege myself with new knowledge day by day. Luckily I had a talk with a friend who told me about coding and all the oportunities this profesion has. Long story short, I started a bootcamp at HENRY that for me, was MINDBLOWING. 
           	 		Now I become a FULLSTACK WEB DEVELOPER, with react, redux, javascript, nodeJS, express, sequelize and postgreSQL among my tech skills.
            	</Highlight>
            </Text>
          </Flex>
        </Flex>
        </>
    )
}

export default About