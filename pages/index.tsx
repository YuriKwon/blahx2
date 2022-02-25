import { NextPage } from 'next';
import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { ServiceLayout } from '@/components/containers/service_layout';
import { useAuth } from '@/contexts/auth_user.context';

/** 최초 진입 페이지
 *
 * 가입 유도 문구
 * 트위터, 구글, 페북, 애플 로그인 버튼
 *
 */
const IndexPage: NextPage = function () {
  const { signInWithTwitter } = useAuth();
  return (
    <ServiceLayout height="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto">
        <Center marginTop="20" marginBottom="10" p="6">
          <Box>
            <img src="/blahx2.svg" alt="hero" />
            <Flex justify="center">
              <Heading>#BlahBlah</Heading>
            </Flex>
          </Box>
        </Center>
      </Box>
      <Box width="full" pb="10" display={{ md: 'block', base: 'none' }}>
        <Center>
          <Button
            size="lg"
            mx="6"
            borderRadius="full"
            leftIcon={<FaTwitter />}
            colorScheme="twitter"
            onClick={signInWithTwitter}
          >
            Twitter 계정으로 시작하기
          </Button>
        </Center>
      </Box>
      <Box position="fixed" width="full" bottom="10" pb="10" display={{ md: 'none' }}>
        <Center>
          <Button
            size="lg"
            width="full"
            mx="6"
            borderRadius="full"
            leftIcon={<FaTwitter />}
            colorScheme="twitter"
            onClick={signInWithTwitter}
          >
            Twitter 계정으로 시작하기
          </Button>
        </Center>
      </Box>
    </ServiceLayout>
  );
};

export default IndexPage;
