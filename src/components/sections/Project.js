import React from 'react'
import {Text, Stack, Flex, Center, Button } from '@chakra-ui/react';
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
    <Stack p={0}>  
    <Center mb="0">
      <Flex
        w={250}
        h={250}
        align={'center'}
        alignItems={'center'}
        justify={'center'}
        mb={0}>       
        {icon}
      </Flex>
      </Center>
    
      <Text textAlign={["center", "center", "left", "left"]} fontSize= {["28px", "32px"]} mt="0" lineHeight= "110%" fontWeight={800}>{title}</Text>
     
      <Text textAlign={["center", "center", "left", "left"]} fontSize= {["18px", "20px"]} color={'gray.600'}>{text}</Text>
      <Button>
      <Link color={'#4a0d99'} textAlign={["center", "center", "left", "left"]} href={link1} mr="5" isExternal>
  Deployed App <ExternalLinkIcon mx="2px" />
</Link>
</Button>
<Button>
<Link color={'#4a0d99'} textAlign={["center", "center", "left", "left"]} href={link2} isExternal>
  GitHub <ExternalLinkIcon mx="2px" />
</Link>
</Button>
    </Stack>
 );
}

Project.propTypes = {
  icon: PropTypes.ReactNode,
  title: PropTypes.string,
  text: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string
};

    
   
