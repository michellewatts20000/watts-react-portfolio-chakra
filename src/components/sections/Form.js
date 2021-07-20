import React from 'react';
 import { Formik } from 'formik';

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
 
 const Form = () => (
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
                bggradient="linear(to-r, red.400,pink.400)"
                bgclip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              If you want to reach out please send me a message through this form.
            </Text>
          </Stack>
     <Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <Box mb="8">
            <Stack spacing={4}>
            <Input isRequired
                placeholder="Your name"
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
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
         
           <Textarea isRequired  placeholder="Your message"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }} />
                </Stack>
                <Button
              fontFamily={'heading'}
              mt={5}
              w={'full'}
              type="submit"
              colorScheme="primary"
              bg={["primary.900", "primary.900", "primary.200", "primary.200"]}
              disabled={isSubmitting}
              color={'white'}
              _hover={{
                bggradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'md',
              }}>
              Submit
            </Button>
            </Box>
          
         </form>
       )}
     </Formik>
  </Stack>
  </Center>
 );
 
 export default Form;
