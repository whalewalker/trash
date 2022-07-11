import React from 'react';
import PropTypes from "prop-types";
import { Box, HStack, Text } from '@chakra-ui/react';
import TaskCard from '../Card/TaskCard';

const TaskSelection = (props) => {
  return (
    <Box w="full" h="full">
      <Box flex={1}>
        <Box bg="rgba(217, 217, 217, 0.25)" h="52px">
          <HStack h="full" justifyContent="space-between" px="15px" alignItems="center">
            <HStack fontSize={14} color="#444" spacing={6}>
              <Text>{props.taskName}</Text>
              <Text>{props.numberOfTasks}</Text>
            </HStack>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8103 0C5.28611 0 0.810303 4.47581 0.810303 10C0.810303 15.5242 5.28611 20 10.8103 20C16.3345 20 20.8103 15.5242 20.8103 10C20.8103 4.47581 16.3345 0 10.8103 0ZM16.6168 11.129C16.6168 11.3952 16.399 11.6129 16.1329 11.6129H12.4232V15.3226C12.4232 15.5887 12.2055 15.8065 11.9393 15.8065H9.68127C9.41514 15.8065 9.1974 15.5887 9.1974 15.3226V11.6129H5.48772C5.22159 11.6129 5.00385 11.3952 5.00385 11.129V8.87097C5.00385 8.60484 5.22159 8.3871 5.48772 8.3871H9.1974V4.67742C9.1974 4.41129 9.41514 4.19355 9.68127 4.19355H11.9393C12.2055 4.19355 12.4232 4.41129 12.4232 4.67742V8.3871H16.1329C16.399 8.3871 16.6168 8.60484 16.6168 8.87097V11.129Z" fill="#4299E1" />
            </svg>
          </HStack>
        </Box>
        <Box mt="27px" py="20px" px="10px" bg="rgba(217, 217, 217, 0.25)" w="full" h="55vh" overflow="scroll">
          <TaskCard />
          {/* <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard /> */}
        </Box>
      </Box>
    </Box>
  )
};

TaskSelection.propTypes = {
  taskName: PropTypes.string,
  numberOfTasks: PropTypes.string
}

export default TaskSelection