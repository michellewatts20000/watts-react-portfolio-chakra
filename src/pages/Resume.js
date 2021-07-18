import React from "react";
import List from "../components/sections/List";
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
        title="Languages"
        id="languages"
        text="JavaScript ES6+, CSS3, HTML5, SQL, NoSQL"
      />
   
      <List
        title="Tools"
        id="tools"
        text="Express, React, Node, Handlebars, JQuery, Bootstrap, Chakra UI, GitHub, MongoDB, MySQL"
      />
      <List
        title="Bootcamp Certificate"
        id="bootcamp"
        text="A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js &
ReactJS."
      />

  
      </SimpleGrid>
           
      </Container>
    </Box>

    </MainPage>
  );
}
