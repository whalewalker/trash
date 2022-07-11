import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react"
import { bool } from "yup";

const AuthButton = props =>{
    return <Button 
        bg="#2155CD" 
        color="#fff"
        width="100%"
        height="56.8"
        _hover={{opacity: .8}}
        mt="1rem"
        type={props.type}
        isDisabled={props.isDisabled}
    >
        {props.button}
    </Button>
}

AuthButton.propTypes = {
    button: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.oneOf( bool | undefined)
}

export default AuthButton;