import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import authImage from "../../../public/images/authImg.png"
import authLogo from "../../../public/images/logo.png";
import AuthInput from "../../../components/Input/AuthInput";
import AuthButton from "../../../components/Button/AuthButton";
import AuthBox from "../../../components/AuthBox";
import { LoginValidation } from "../../../validator";

const Login = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginValidation,
        onSubmit: () => {
            navigate("/home")
        }
    });

    return(
        <Flex justifyContent="space-between" flex={1} overflow="hidden">
            <Box w="100%">
                <Image h="100vh" bgPos="center" objectFit="cover" w="100%" src={authImage} alt="auth side image" />
            </Box>
            <Box w="100%" h="100vh" alignItems="center" justifyContent="center" display="flex" flexDir="column">
                <Image w="81px" h="65px" src={authLogo} alt="app logo" />
                <Text lineHeight="1.7" fontSize="36px">Welcome back Seedder!</Text>
                <AuthBox>
                    <form onSubmit={formik.handleSubmit}>
                        <AuthInput
                            label="Email Address"
                            input={{
                                type: "email",
                                id: "email",
                                name: "email",
                                onBlur: formik.handleBlur,
                                onChange: formik.handleChange,
                                value: formik.values.email
                            }}
                        />
                        {formik.touched.email && formik.errors.email ? <Box color="red.500" fontSize={14}>{ formik.errors.email }</Box> : null}
                        <AuthInput
                            label="Password"
                            input={{
                                type: "password",
                                id: "password",
                                name: "password",
                                onBlur: formik.handleBlur,
                                onChange: formik.handleChange,
                                value: formik.values.password
                            }}
                        />
                        {formik.touched.password && formik.errors.password ? <Box color="red.500" fontSize={14}>{ formik.errors.password }</Box> : null}
                        <Text color="#2155CD" mt="5px" textAlign="end">
                            <Link to="/forgot-password">Forgot Password</Link>
                        </Text>
                            <AuthButton isDisabled={!!formik.errors.email || !!formik.errors.password} type="submit" button="Login" />
                    </form>
                    <Text
                        mt="1rem"
                        textAlign="center">Do not have an account yet?
                        <Link to="/register"><span style={{color:"#2155CD"}}> Sign up</span></Link>
                    </Text>
                </AuthBox>
            </Box>
        </Flex>
    )
};

export default Login;