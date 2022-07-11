import React from "react";
import PropTypes from "prop-types";
import { Box, Button, HStack } from "@chakra-ui/react";

const PrimaryButton = props => {
    return <Button
        _focus={{border:"none"}}
        h={props.h}
        w={props.w}
        mt={props.mt}
        bg={props.bg}
        >
        <HStack>
            <Box>{props.icon}</Box>
            <Box fontSize={15}>{props.name}</Box>
        </HStack>
    </Button>
};


PrimaryButton.propTypes = {
    h:PropTypes.any,
    w:PropTypes.any,
    bg:PropTypes.any,
    mt:PropTypes.any,
    icon:PropTypes.any,
    name:PropTypes.any,
}

export default PrimaryButton;
