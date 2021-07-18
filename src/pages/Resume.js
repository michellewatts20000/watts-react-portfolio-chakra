import React from "react";
import List from "../components/sections/List";
import Statistics from "../components/sections/Statistics";
import MainPage from "../components/layouts/MainPage";
import { motion } from "framer-motion"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Center,
  Link,
  Button
} from '@chakra-ui/react';


export default function Portfolio() {
  return (
    <MainPage>

        <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Hi! My name is Michelle Watts.</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
           I am a Full Stack web developer utilising a background in graphic design to bring creative approaches to problem
solving and UX.
        </Text>
      </Stack>
 <Center mt="10">
         <Link href="https://drive.google.com/file/d/1krIgipz9jmquz0QYmlm1wQfsUzI-PVIB/view?usp=sharing" isExternal>
            <motion.div whileHover={{ scale: 1.1, opacity: 1 }}>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Download Resume
          </Button>
          </motion.div>
        </Link>
        </Center>
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      <List
        title="Team-oriented"
        id="languages"
        text="Team-oriented individual with strengths in analytical problem solving and collaborating across
diverse groups. Adept at working independently and collaborating with teams across multiple functions to
take information from a wide variety of sources and effectively break down concepts in layman terms to
diverse audiences."
      />
   
      <List
        title="Strengths"
        id="strengths"
        text="A critical thinker with an eye for aesthetics and a research-based approach to design and storytelling.
Strengths include problem solving, project management, and agile adaptation to last minute support
changes."
      />
      <List
        title="Bootcamp Certificate"
        id="bootcamp"
        text="A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js &
ReactJS."
      />

  
      </SimpleGrid>
      < Statistics />    
      </Container>
      
    </Box>
 
    </MainPage>
  );
}
