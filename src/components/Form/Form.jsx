import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormBody, Label, Input, AddContactBtn } from './Form.styled';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  submitHandler = evt => {
    evt.preventDefault();
    const id = nanoid();
    this.props.onSubmit(id, this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };
  onInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <>
        <FormBody onSubmit={this.submitHandler}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onInputChange}
            />
          </Label>

          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number.trim()}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onInputChange}
            />
          </Label>
          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </FormBody>
      </>
    );
  }
}
