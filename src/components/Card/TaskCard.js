import React from 'react';
import Draggable from "react-draggable";
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const TaskCard = () => {
  return (
    <Draggable>
      <Box pos="fixed" cursor="pointer" w="240px" h="102px" bg="#fff" rounded="10px" mb="20px" px="15px" py="10px">
        <Text color="#444444" fontSize={12}>Create endpoint for search input and for filter</Text>
        <Flex justifyContent="space-between" mt="12px">
        <Box
          bg="rgba(66, 153, 225, 0.53)" h="24px"
          px="10px" color="#fff"
          rounded="50px"
          fontSize={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
            Frontend
        </Box>
        <Box>
            <Avatar ml="-10px" size="xs" fontSize={22} name='Christian' />
            <Avatar ml="-10px" size="xs" fontSize={22} name='Demi' />
            <Avatar ml="-10px" size="xs" fontSize={22} name='Ismail' />
        </Box>
        </Flex>
      </Box> 
    </Draggable>
  )}

export default TaskCard