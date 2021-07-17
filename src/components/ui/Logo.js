import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaHome } from 'react-icons/fa'


export default function Logo(props) {
  return (
    <Box {...props}>
    <IconButton icon={<FaHome />} isRound='true' onClick={() => window.open('./', "_self")}  />
    </Box>
  );
}
