import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillSetting, AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'#510854'} minH={'40'} p="16" color={'#FFEFD5'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid papayawhip'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid papayawhip']}
          borderRight={['none', '1px solid papayawhip']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Connect.Inspire.Engage.Evolve
          </Heading>
          <Button variant={'link'} colorScheme={'papayawhip'} fontSize={'20'}>
            <AiFillSetting size={'20'} />
            <a target={'black'} href="https://linkfree.io/Kevinkp09">
              Let's Get Social:Connect with Me
            </a>
          </Button>
          {/* <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="">
              Twitter
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/Kevinkp09">
              Github
            </a>
          </Button> */}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
