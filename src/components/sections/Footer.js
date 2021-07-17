import React from 'react';
import { IconButton } from "@chakra-ui/button";

import { Flex, Text, Spacer } from '@chakra-ui/layout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
        >
            <Text fontSize="lg" fontWeight="bold">
                Michelle Watts Portfolio
            </Text>
            <Spacer></Spacer>
            <IconButton icon={<FaLinkedin />} isRound='true' to="https://www.linkedin.com/in/michelle-e-watts/" ></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound='true' to="https://github.com/michellewatts20000" ></IconButton>
        </Flex>


    );
}

export default Footer;
