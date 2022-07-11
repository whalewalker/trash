import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import PrimaryButton from "../Button/PrimaryButton";
import appLogo from "../../public/images/logo.png";
import navs from "../Navs";

const Sidebar = () => {
    return (
        <Box pos="fixed" width="15%" height="100vh" bg="#2155CD" pt="2rem">
            <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" mb="2rem">
                <Image w="61px" h="51px" src={appLogo} alt="app logo" />
                <PrimaryButton
                    bg="#fff" w="60%" h="50px" mt="2rem"
                    icon={
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3555 0C4.64776 0 0.0232544 4.47581 0.0232544 10C0.0232544 15.5242 4.64776 20 10.3555 20C16.0632 20 20.6877 15.5242 20.6877 10C20.6877 4.47581 16.0632 0 10.3555 0ZM16.3548 11.129C16.3548 11.3952 16.1299 11.6129 15.8549 11.6129H12.022V15.3226C12.022 15.5887 11.797 15.8065 11.522 15.8065H9.18894C8.91397 15.8065 8.68899 15.5887 8.68899 15.3226V11.6129H4.85607C4.5811 11.6129 4.35612 11.3952 4.35612 11.129V8.87097C4.35612 8.60484 4.5811 8.3871 4.85607 8.3871H8.68899V4.67742C8.68899 4.41129 8.91397 4.19355 9.18894 4.19355H11.522C11.797 4.19355 12.022 4.41129 12.022 4.67742V8.3871H15.8549C16.1299 8.3871 16.3548 8.60484 16.3548 8.87097V11.129Z" fill="#2155CD" fillOpacity="0.85"/>
                        </svg>
                    }
                    name="New Project"
                />
            </Box>
            {navs.map((nav) => (
                <Box key={nav.id} color={nav.color} mt="10px" bg={nav.bg} width="100%" h="50px" cursor="pointer">
                    <HStack h="100%" ml="2.5rem" alignItems="center">
                        <Box>{nav.icon}</Box>
                        <Box fontSize={18}>{nav.name}</Box>
                    </HStack>
                </Box>
            ))}
        </Box>
    )
};

export default Sidebar;