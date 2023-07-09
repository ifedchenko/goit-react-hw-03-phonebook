import React from 'react';
import PropTypes from 'prop-types';

import { DeleteButton, List, ListItem, P } from './Contact.styled';

const Contact = ({ contacts, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <P>
              {name}: {number}
              <DeleteButton type="button" onClick={() => deleteContact(id)}>
                Delete
              </DeleteButton>
            </P>
          </ListItem>
        ))}
      </List>
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
