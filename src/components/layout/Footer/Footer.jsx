import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
        <Stack direction={["column", "row"]}>
            <VStack alignItems={['center', 'flex-start']} width="full">
                <Heading children = "all rights reserved" color={'white'}/>
            </VStack>

            <HStack spacing={['2', '10']} justifyContent={'center'} color={'white'} fontSize={'50'}></HStack>
        </Stack>
    </Box>
  )
}

export default Footer