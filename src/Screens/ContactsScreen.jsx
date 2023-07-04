import React, { useEffect } from 'react';
import { TitleList, Div, DivFlex, Button } from './ContactsScreens.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Filter from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import * as contactsSelectors from '../redux/contacts/contactsSelectors';
import { openModal } from 'redux/modal/sliceModal';
import Loader from 'components/Loader/Loader';
import background from '../img/BGcontacts.jpg';

function ContactsScreen() {
  const { isOpen } = useSelector(state => state.modal);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Div
      style={{
        backgroundImage: `url(${background})`,
        ackgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <TitleList>Contacts</TitleList>
      <DivFlex>
        <Button
          type="submit"
          aria-label="add contact"
          onClick={() => dispatch(openModal())}
        >
          <BsFillPersonPlusFill />
        </Button>
        <Filter />
      </DivFlex>
      {isOpen && <Modal />}
      {isLoading && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </Div>
  );
}

export default ContactsScreen;
