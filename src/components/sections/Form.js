import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Center,
  Textarea
} from '@chakra-ui/react';


export default function JoinOurTeam() {
  return (
  
    <Box>
      <Center>
      
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Get in touch
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              If you want to reach out please send me a message through this form.
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="your@email.com"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
             <Textarea  placeholder="Your message"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }} />
          
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              colorScheme="purple"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Submit
            </Button>
          </Box>
          form
        </Stack>
    </Center>
      
    </Box>
  
  );
}

