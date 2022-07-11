import React, {useState} from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import PropTypes from "prop-types";

const AuthInput = (props) => {

    const [showPassword, setShowPassword] = useState(true);

    const handleShowPassword = () => {
        setShowPassword(toggle => !toggle)
    }

    return(
        <Box mt=".5rem"> 
            <label style={{fontSize:"13px"}} htmlFor={props.label}>{props.label}</label>
            <Flex alignItems="center">
                <Input
                    width="100%"
                    height="56.8px"
                    outline="none"
                    border="none"
                    bg="#F5F5F5"
                    mt="5px"
                    focusBorderColor="#f5f5f5"
                    {...props.input}
                />
                {props.input.type === "password" && <Box position="relative">
                    <Box position="absolute" marginLeft="-40px" marginTop="-5px" cursor="pointer">
                        {showPassword ? <AiFillEyeInvisible onClick={handleShowPassword} color="#444" size="20px" /> : <AiFillEye onClick={handleShowPassword} color="#444" size="20px"  />}
                    </Box>
                </Box>}
            </Flex>
        </Box>
    )
};

AuthInput.propTypes = {
    label: PropTypes.any,
    input: PropTypes.any
}


export default AuthInput;