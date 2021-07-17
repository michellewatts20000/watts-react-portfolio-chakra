import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Center,
  Link
} from "@chakra-ui/react";

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
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
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
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Center>
        <Link href={ctaLink} isExternal>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            mr="3"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
          <Link href={ctaLink2} isExternal>
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
        </Link>
</Center>
      </Stack>
      <Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 12, md: 0 }}>
      
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
