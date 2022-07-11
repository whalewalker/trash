import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const ProjectCard = (props) => {
  return <Box w="250px" h="146px" border="1px solid #ccc" rounded="10px">
            <Flex px="1rem" justifyContent="space-between" height="52px" alignItems="center" bg="#B620E0" roundedTopRight="10px" roundedTopLeft="10px" color="#fff">
                <Text>{props.projectName}</Text>
                <Box>
                    <svg width="6" height="17" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.93304 7.5C1.5797 7.5 0.472412 8.625 0.472412 10C0.472412 11.375 1.5797 12.5 2.93304 12.5C4.28639 12.5 5.39367 11.375 5.39367 10C5.39367 8.625 4.28639 7.5 2.93304 7.5ZM2.93304 0C1.5797 0 0.472412 1.125 0.472412 2.5C0.472412 3.875 1.5797 5 2.93304 5C4.28639 5 5.39367 3.875 5.39367 2.5C5.39367 1.125 4.28639 0 2.93304 0ZM2.93304 15C1.5797 15 0.472412 16.125 0.472412 17.5C0.472412 18.875 1.5797 20 2.93304 20C4.28639 20 5.39367 18.875 5.39367 17.5C5.39367 16.125 4.28639 15 2.93304 15Z" fill="white"/>
                    </svg>
                </Box>
            </Flex>
            <Box display="flex" justifyContent="center" alignItems="center" h="94px">
                <Link to="/tasks">
                    <Button _focus={{border: "none"}} color="#555555" w="140px" bg="#F7F7F7" height="47px" rounded="none" fontSize={16}>
                        {props.buttonName}
                    </Button>
                </Link>
            </Box>
        </Box>
}

ProjectCard.propTypes = {
    projectName: PropTypes.any,
    buttonName: PropTypes.any
}

export default ProjectCard