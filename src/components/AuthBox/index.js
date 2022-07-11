import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react"

const AuthBox = props => {
    return <Box
        w="70%"
        h="auto"
        boxShadow="0px 0px 20px 20px rgba(238, 238, 238, 0.55)"
        borderRadius="10px"
        mt="1rem"
        px="2rem"
        py="2rem"
    >
        {props.children}
    </Box>
}

AuthBox.propTypes = {
    children: PropTypes.node
}

export default AuthBox;