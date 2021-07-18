import React from "react";
import {
  Box,
  chakra,
  Button,
  Link,
  Flex,
  Center,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsClipboardData } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoBook} from 'react-icons/go';
import { motion } from "framer-motion"


function StatsCard(props){
  const { title, stat, icon } = props;
  return (
   
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'s'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  
  );
}

export default function BasicStatistics() {
  return (
          <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="40vh"
      px={8}
      mb={16}
  
    >
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={5}
        fontWeight={'bold'}>
       My skills
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Languages'}
          stat={'JavaScript ES6+, CSS3, HTML5, SQL, NoSQL'}
          icon={<BsClipboardData size={'3em'} />}
        />
        <StatsCard
          title={'Applications'}
          stat={'GitHub, MongoDB, MySQL'}
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard
          title={'Tools'}
          stat={'Chakra, Express, React, Node.js, Handlebars, JQuery, Bootstrap'}
          icon={<GoBook size={'3em'} />}
        />
       
      </SimpleGrid>
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
    </Box>
    
     </Flex>
  );
}