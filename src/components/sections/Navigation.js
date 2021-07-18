import React from "react"
import { Link } from "react-router-dom"
import { Text } from "@chakra-ui/react"

 
const Navigation = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      as={window.location.pathname === to ? 'u' : ''}
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}
 

 
export default Navigation