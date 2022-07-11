import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import { BsArrowRight } from "react-icons/bs";
import authImage from "../../../public/images/authImg.png"
import authLogo from "../../../public/images/logo.png";
import AuthInput from "../../../components/Input/AuthInput";
import AuthButton from "../../../components/Button/AuthButton";
import AuthBox from "../../../components/AuthBox";

const ForgotPassword = () => {
    return(
        <Flex justifyContent="space-between" flex={1} overflow="hidden">
            <Box w="100%">
                <Image h="100vh" bgPos="center" objectFit="cover" w="100%" src={authImage} alt="auth side image" />
            </Box>
            <Box w="100%" h="100vh" alignItems="center" justifyContent="center" display="flex" flexDir="column">
                <Image w="81px" h="65px" src={authLogo} alt="app logo" />
                <Text lineHeight="1.7" fontSize="36px">You forgot your password?</Text>
                <Text fontSize={14}>Seedd got you covered, an OTP will be sent to your email.</Text>
                <AuthBox>
                    <form>
                        <AuthInput
                            label="Email Address"
                            input={{
                                type: "email",
                                id: "email",
                                name: "email"
                            }}
                        />
                        {/* <Text color="#2155CD" mt="5px" textAlign="end">
                            <Link>Forgot Password</Link>
                        </Text> */}
                        <AuthButton button="Send" />
                    </form>
                    <Text
                        mt="1rem"
                        textAlign="center">Goto back to login page
                
                        <Link to="/login"> <span style={{color: "#2155CD"}}>click here</span></Link>
                    </Text>
                </AuthBox>
            </Box>
        </Flex>
    )
};

export default ForgotPassword;