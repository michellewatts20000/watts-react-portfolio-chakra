import React from "react";
import { Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaHome } from 'react-icons/fa'
// import { useColorMode } from '@chakra-ui/color-mode'


export default function Logo(props) {
  // const { toggleColorMode } = useColorMode();
  return (
    <Box {...props}>
    <IconButton  icon={<FaHome color="primary.700"/>} isRound='true' mr="3" onClick={() => window.open('./', "_self")}  />
     {/* <IconButton  icon={<FaSun />} isRound='true' onClick={toggleColorMode}></IconButton> */}
    </Box>
  );
}
