import React from 'react';
import PropTypes from 'prop-types';

import { ContainerBlock } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
