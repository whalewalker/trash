import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const InternalLayout = ({ Component, ...otherProps }) => (
    <Box>
        <Box><Sidebar /></Box>
        <Box>
            <Box><Header /></Box>
            <Box pl="16rem" pr="3rem"><Component {...otherProps} /></Box>
        </Box>
    </Box>
);

InternalLayout.propTypes = {
    Component: PropTypes.any
}

export default InternalLayout;