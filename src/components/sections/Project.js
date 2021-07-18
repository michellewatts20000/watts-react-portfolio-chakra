import React from 'react'
import {Text, Stack, Center, Button, Box, Heading, useColorModeValue, Image } from '@chakra-ui/react';
import { Link } from "@chakra-ui/react"
import PropTypes from "prop-types";


export default function Project({
  icon,
  title,
  text,
  link1,
  link2,
  tech

}) {
  return (
 
     <Center py={3}>
      <Box
        maxW={'345px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={10}
          pos={'relative'}>
        <Image
            src={icon}
            layout={'fill'}
            
          />
        </Box>
        <Stack>
          <Text
            color={'primary.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
           {tech}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'}>
           {text}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={2} align={'center'}>
         
         
            <Button colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"><Link fontWeight={600} href={link1} isExternal>Deployed</Link></Button>
           <Button colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"><Link fontWeight={600} href={link2} isExternal>GitHub</Link></Button>
         
        </Stack>
      </Box>
    </Center>
 );
}

Project.propTypes = {
  icon: PropTypes.ReactNode,
  title: PropTypes.string,
  text: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string
};

    
   
