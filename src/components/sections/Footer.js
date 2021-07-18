import React from 'react';
import { IconButton } from "@chakra-ui/button";
import { Flex, Text, Spacer } from '@chakra-ui/layout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={4}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["primary.700", "primary.700"]}
        >
            <Text color={["white", "white", "primary.700", "primary.700"]} fontSize="lg" fontWeight="bold">
                Michelle Watts' Portfolio
            </Text>
            <Spacer></Spacer>
            <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => window.open('https://www.linkedin.com/in/michelle-e-watts/')}  ></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => window.open('https://github.com/michellewatts20000')} ></IconButton>
        </Flex>
    );
}

export default Footer;
