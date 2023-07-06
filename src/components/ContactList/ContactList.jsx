import { BsFillPersonDashFill, BsPersonCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { removeContacts } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';

import { Button, Li, Ul } from './ContactList.styled';
import { toastOptions } from '../../options/toastOptions';

const ContactList = () => {
  const { filter } = useSelector(state => state.filter);
  const data = useSelector(contactsSelectors.selectContacts);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!data) {
      return;
    }
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContact = getVisibleContacts();

  const deleteContacts = id => {
    dispatch(removeContacts(id));
    toast.error('Сontact deleted!', toastOptions);
  };

  return (
    <div>
      <Ul>
        {filterContact.map(({ id, name, number }) => (
          <Li key={id}>
            <BsPersonCircle style={{ width: 40, height: 40 }} />
            {name} : {number}
            <Button
              onClick={() => deleteContacts(id)}
              aria-label="Delete contact"
            >
              <BsFillPersonDashFill />
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};
ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
