import React from "react"
import Navigation from "../sections/Navigation";
import { Box, Flex, Button, CloseButton} from "@chakra-ui/react"
import Logo from "../ui/Logo"
import { HamburgerIcon } from '@chakra-ui/icons'
 

const Header = (props) => {
const [show, setShow] = React.useState(false)
const toggleMenu = () => setShow(!show)
 
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={[4]}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
     
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
        />
      </Flex>
 
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseButton  color={["white", "white", "primary.700", "primary.700"]} /> : <HamburgerIcon w={6} h={6}  color={["white", "white", "primary.700", "primary.700"]}/>}
      </Box>
 
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
           color={["white", "white", "primary.700", "primary.700"]}
        >
          <Navigation to="/">About</Navigation>
          <Navigation to="/portfolio">Portfolio </Navigation>
          <Navigation to="/resume">Resume </Navigation>
         
          <Navigation to="/contact" isLast>
            <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="sm"
            >
              Contact
            </Button>
          </Navigation>
        </Flex>
      </Box>
    </Flex>
  )
}

    
export default Header