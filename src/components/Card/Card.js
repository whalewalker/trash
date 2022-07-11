import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Box, VStack, Text, Button} from "@chakra-ui/react";

const Card = (props) => {
  return <Box border={props.border} h="400px" bg={props.bg} rounded="10px" flex={1}>
          <Box display="flex" justifyContent="center" h="full" alignItems="center"> 
            <VStack spacing={6}>
                <Box width="80px" height="80px" rounded="full" bg={props.color} />
                    <Box textAlign="center">
                        <Text fontWeight={600}>{props.title}</Text>
                        <Text mt="1rem">{props.description} </Text>
                    </Box>
              <Link to={`/${props.link}`}>
                <Button
                    w="275px"
                    fontWeight={400} h="72px"
                    bg={props.buttonBg}
                    color={props.buttonColor}
                    _hover={{ opacity: ".7" }}
                    border="none"
                    _focus={{border: "none"}}
                    >
                        {props.button}
                    </Button>
              </Link>
            </VStack>
            </Box>
        </Box>
}

Card.propTypes = {
    border: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    button: PropTypes.any,
    bg: PropTypes.any,
    color: PropTypes.any,
    buttonBg: PropTypes.any,
    buttonColor: PropTypes.any,
    link: PropTypes.any
}

export default Card