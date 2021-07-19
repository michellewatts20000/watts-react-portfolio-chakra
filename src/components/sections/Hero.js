import React from "react";
import PropTypes from "prop-types";
// import { mode } from '@chakra-ui/theme-tools';
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Center,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import { motion } from "framer-motion"

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ctaLink2,
  ctaText2,
  ...rest
}) {
  return (
    <Flex
      align="center"
      // color={useColorModeValue('gray.800', 'gray.200')}
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="65vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack

        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="3xl"
          fontWeight="bold"
          // bgGradient="linear(to-r, cyan.800, blue.200, purple.700)"
          // bgClip='text'
          color="primary.500"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color={useColorModeValue('gray.800', 'gray.100')}
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Center>
          <Link href={ctaLink} isExternal>
            <motion.div whileHover={{ scale: 1.1, opacity: 1 }}>
              <Button
                colorScheme="primary"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
                mr="3"
              >
                {ctaText}
              </Button>
            </motion.div>
          </Link>
          <Link href={ctaLink2} isExternal>
            <motion.div whileHover={{ scale: 1.1, opacity: 1 }}>
              <Button
                colorScheme="primary"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"

              >
                {ctaText2}
              </Button>
            </motion.div>
          </Link>
        </Center>
      </Stack>

      <Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <motion.div animate={{ x: 100, scale: 1.5, rotate: 90 }} />
        <Image src={image} size="10%" borderRadius="full" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText2: PropTypes.string,
  ctaLink2: PropTypes.string
};
