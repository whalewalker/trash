import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import authImage from "../../../public/images/authImg.png"
import authLogo from "../../../public/images/logo.png";
import AuthInput from "../../../components/Input/AuthInput";
import AuthButton from "../../../components/Button/AuthButton";
import AuthBox from "../../../components/AuthBox";

const ResetPassword = () => {
    return(
        <Flex justifyContent="space-between" flex={1} overflow="hidden">
            <Box w="100%">
                <Image h="100vh" bgPos="center" objectFit="cover" w="100%" src={authImage} alt="auth side image" />
            </Box>
            <Box w="100%" h="100vh" alignItems="center" justifyContent="center" display="flex" flexDir="column">
                <Image w="81px" h="65px" src={authLogo} alt="app logo" />
                <Text lineHeight="1.7" fontSize="36px">Change your password?</Text>
                <Text fontSize={14}>You can go ahead and change your password.</Text>
                <AuthBox>
                    <form>
                        <AuthInput
                            label="Password"
                            input={{
                                type: "password",
                                id: "password",
                                name: "password"
                            }}
                        />
                        <AuthInput
                            label="Confirm Password"
                            input={{
                                type: "password",
                                id: "password",
                                name: "password"
                            }}
                        />
                        <AuthButton button="Comfirm" />
                    </form>
                </AuthBox>
            </Box>
        </Flex>
    )
};

export default ResetPassword;