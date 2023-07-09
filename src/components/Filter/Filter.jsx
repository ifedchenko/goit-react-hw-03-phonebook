import React from 'react';
import PropTypes from 'prop-types';
import { Lable, Input, Name } from './Filter.styled';

const Filter = ({ text, onChange }) => {
  return (
    <div>
      <Lable>
        <Name> Find contacts by name</Name>
        <Input type="text" value={text} onChange={onChange} />
      </Lable>
    </div>
  );
};

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
