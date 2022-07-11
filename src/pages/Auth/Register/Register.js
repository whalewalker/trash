import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import authImage from "../../../public/images/authImg.png"
import authLogo from "../../../public/images/logo.png";
import AuthInput from "../../../components/Input/AuthInput";
import AuthButton from "../../../components/Button/AuthButton";
import AuthBox from "../../../components/AuthBox";

const Register = () => {
    return(
        <Flex justifyContent="space-between" flex={1} overflow="hidden">
            <Box w="100%">
                <Image h="100vh" bgPos="center" objectFit="cover" w="100%" src={authImage} alt="auth side image" />
            </Box>
            <Box w="100%" h="100vh" alignItems="center" justifyContent="center" display="flex" flexDir="column">
                <Image w="81px" h="65px" src={authLogo} alt="app logo" />
                <Text lineHeight="1.7" fontSize="36px">Sign Up to Seedd!</Text>
                <AuthBox>
                    <form>
                        <AuthInput
                            label="Full Name"
                            input={{
                                type: "text",
                                id: "text",
                                name: "text"
                            }}
                        />
                        <AuthInput
                            label="Email Address"
                            input={{
                                type: "email",
                                id: "email",
                                name: "email"
                            }}
                        />
                        <AuthInput
                            label="Password"
                            input={{
                                type: "password",
                                id: "password",
                                name: "password"
                            }}
                        />
                        {/* <Text color="#2155CD" mt="5px" textAlign="end">
                            <Link>Forgot Password</Link>
                        </Text> */}
                        <AuthButton button="Sign Up" />
                    </form>
                    <Text
                        mt="1rem"
                        textAlign="center">I already have an account?
                        <Link to="/login"> <span style={{color:"#2155CD"}}>Login</span></Link>
                    </Text>
                </AuthBox>
            </Box>
        </Flex>
    )
};

export default Register;