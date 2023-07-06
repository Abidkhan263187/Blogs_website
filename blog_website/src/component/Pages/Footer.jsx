import { Box, Flex, Link, Text } from '@chakra-ui/react';

export  const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={6}>
      <Flex direction="column" align="center" maxW="container.md" mx="auto">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Stay Connected
        </Text>
        <Flex mb={4}>
          <Link href="#" mr={4}>
            Facebook
          </Link>
          <Link href="#" mr={4}>
            Twitter
          </Link>
          <Link href="#" mr={4}>
            Instagram
          </Link>
        </Flex>
        <Text fontSize="sm" mb={4}>
          Contact: abidkhan263187@gmail.com | 6280007521
        </Text>
        <Text fontSize="sm" textAlign="center">
          &copy; 2023 My Blog. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};


