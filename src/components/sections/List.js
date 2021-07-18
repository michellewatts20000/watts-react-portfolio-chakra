import React from "react";
import {
  Box,
  Icon,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';




export default function List({
  title,
 id,
 text
}) {
  return (
    
       
            <HStack key={id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{title}</Text>
                <Text color={'gray.600'}>{text}</Text>
              </VStack>
            </HStack>
   
  
  );
}