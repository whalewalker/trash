/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from "prop-types";
import InternalLayout from '../../layouts/InternalLayout';

const ComposeInternalLayouts = (Component) => (passThroughProps) => (
  <InternalLayout {...passThroughProps} Component={Component} />
);

InternalLayout.propTypes={
    passThroughProps: PropTypes.node,
    Component: PropTypes.node
}

export default ComposeInternalLayouts;