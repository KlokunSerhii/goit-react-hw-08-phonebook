import React, { useEffect } from 'react';
import { TitleList, Div, Title } from './ContactsViews.styled';
import Filter from 'components/Filter/Filter';
import Form from 'components/Forma/Forma';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import * as contactsSelectors from '../redux/contacts/contactsSelectors';
import Loader from 'components/Loader/Loader';

function ContactsViews() {
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Title>Phonebook</Title>
      <Div>
        <Form />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TitleList>Contacts</TitleList>
          <Filter />
          {isLoading && <Loader />}
          {error && <b>{error}</b>}
          <ContactList />
        </div>
      </Div>
    </div>
  );
}

export default ContactsViews;
