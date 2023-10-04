import { Box, Flex, Link, Text } from '@chakra-ui/react';

export  const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={6}>
      <Flex direction="column" align="center" maxW="container.md" mx="auto">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Stay Connected
        </Text>
        <Flex mb={4}>
          <Link href="https://www.linkedin.com/in/abid-khan-325795182/" mr={4}>
          <i class="fa-brands fa-linkedin fa-lg"></i>
          </Link>
          <Link href="#" mr={4}>
          <i class="fa-brands fa-github fa-lg"></i>
          </Link>
          <Link href="https://www.instagram.com/_abidkhann/" mr={4}>
          <i class="fa-brands fa-instagram fa-lg"></i>
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


