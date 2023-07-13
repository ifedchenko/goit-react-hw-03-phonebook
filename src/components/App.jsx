import React, { Component } from 'react';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import Form from 'components/Form/Form';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (id, name, number) => {
    const isContactExist = this.state.contacts.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!isContactExist) {
      this.setState(prevState => {
        return { contacts: [{ id, name, number }, ...prevState.contacts] };
      });
    } else {
      alert(`This ${name} has already exist!`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => {
      const filterContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return {
        contacts: filterContacts,
      };
    });
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  onActiveFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <Container>
          <Section title={'Phonebook'}>
            <Form onSubmit={this.addContact}></Form>
          </Section>
          <Section title={'Contacts'}>
            <Filter text={this.state.filter} onChange={this.onFilterChange} />
            <Contact
              // contacts={
              //   this.state.filter === ''
              //     ? this.state.contacts
              //     : this.onActiveFilter()
              // }
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            ></Contact>
          </Section>
        </Container>
      </>
    );
  }
}
