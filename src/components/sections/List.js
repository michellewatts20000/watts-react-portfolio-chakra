import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  Link,
  Button
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion"

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Hi! My name is Michelle Watts.</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
           I am a digital campaigner at Unions NSW and a web developer. I have a background in graphic/web design &amp; audio engineering.
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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
           
      </Container>
    </Box>
  );
}