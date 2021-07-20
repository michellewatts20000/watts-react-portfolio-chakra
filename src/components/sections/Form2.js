import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

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


const style = {
 
};

const styleError = {
  ...style,
  border: "1px solid tomato"
};
 
 const DisplayingErrorMessagesSchema = Yup.object().shape({
   username: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
      message: Yup.string()
    
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 export const Form2 = () => (
   <Center>
        <Stack
          bg={'gray.50'}
          mb={10}
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
       initialValues={{
         username: '',
         email: '',
         message: '',
       }}
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
          
            <Stack spacing={4}>

   <Field name="username" type="text">
          {({ field, form }) => (
            <Input
             placeholder="Your name"
              style={form.touched.username && form.errors.username ? styleError : style}
              {...field}
                bg={'gray.100'}
                border={0}
                color={'gray.900'}
                _placeholder={{
                  color: 'gray.500',
                }}
           
            
            />
          )}
        </Field>
           {/* If this field has been touched, and it contains an error, display it
            */}
           <Text color={'#FF0000'} fontSize={{ base: 'sm', sm: 'md' }}>{touched.username && errors.username && <div>{errors.username}</div>}</Text>
          <Field name="email" type="email">
          {({ field, form }) => (
            <Input
             placeholder="your@email.com"
              style={form.touched.username && form.errors.username ? styleError : style}
              {...field}
                bg={'gray.100'}
                border={0}
                color={'gray.900'}
                _placeholder={{
                  color: 'gray.500',
                }}            
            />
          )}
        </Field>
           {/* If this field has been touched, and it contains an error, display
           it */}
            <Text color={'#FF0000'} fontSize={{ base: 'sm', sm: 'md' }}>
           {touched.email && errors.email && <div>{errors.email}</div>}</Text>

            <Field name="message" type="text">
          {({ field, form }) => (
            <Textarea
             placeholder="Your message"
              style={form.touched.message && form.errors.message ? styleError : style}
              {...field}
                bg={'gray.100'}
                border={0}
                color={'gray.900'}
                mb={0}
                _placeholder={{
                  color: 'gray.500',
                }}
            />
          )}
        </Field>
           {/* If this field has been touched, and it contains an error, display it
            */}
           <Text color={'#FF0000'} mt={0} fontSize={{ base: 'sm', sm: 'md' }}>{touched.message && errors.message && <div>{errors.message}</div>}</Text>

           </Stack>
            <Button
              fontFamily={'heading'}
              mt={5}
              w={'full'}
              type="submit"
              colorScheme="primary"
              bg={["primary.900", "primary.900", "primary.200", "primary.200"]}>
        Submit
        </Button>
         </Form>
       )}
     </Formik>
   </Stack>
  </Center>
 );


 export default Form2