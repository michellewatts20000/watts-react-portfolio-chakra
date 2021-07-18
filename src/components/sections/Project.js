import React from 'react'
import {Text, Stack, Flex, Center } from '@chakra-ui/react';
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import PropTypes from "prop-types";


export default function Project({
  icon,
  title,
  text,
  link1,
  link2,

}) {
  return (
    <Stack p={5}>  
      <Center>
      <Flex
        w={16}
        h={16}
        align={'center'}
        alignItems={'center'}
        justify={'center'}
        rounded={'full'}
        bg={'#CBC3E3'}
        mb={1}>
          
        {icon}
      </Flex>
      </Center>
    
      <Text textAlign={["center", "center", "left", "left"]} fontWeight={800}>{title}</Text>
     
      <Text textAlign={["center", "center", "left", "left"]} color={'gray.600'}>{text}</Text>
      
      <Link color={'#4a0d99'} textAlign={["center", "center", "left", "left"]} href={link1} mr="5" isExternal>
  Deployed App <ExternalLinkIcon mx="2px" />
</Link>
<Link color={'#4a0d99'} textAlign={["center", "center", "left", "left"]} href={link2} isExternal>
  GitHub <ExternalLinkIcon mx="2px" />
</Link>
    </Stack>
 );
}

Project.propTypes = {
  // icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string
};

    
   
