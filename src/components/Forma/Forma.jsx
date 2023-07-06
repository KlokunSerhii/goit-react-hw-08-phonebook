import { Formik, ErrorMessage } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { SignupSchema } from '../../options/validForm';
import { Label, Forma, Input, Button } from './Forma.styled';
import { addContacts } from 'redux/contacts/contactsOperations';
import { toastOptions } from '../../options/toastOptions';
import { nanoid } from '@reduxjs/toolkit';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';

function Form() {
  const name = '';
  const number = '';

  const data = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const find = data.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (!find) {
      dispatch(addContacts({ id: nanoid(), name, number }));
      toast.success('Contact added', toastOptions);
      resetForm();
      return;
    }
    toast.error(' Contact already in contacts.', toastOptions);
  };

  return (
    <div>
      <Formik
        initialValues={{ name, number }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Forma>
          <Label>
            <Input type="text" name="name" placeholder="Name" />
          </Label>
          <ErrorMessage name="name" />
          <Label>
            <Input type="tel" name="number" placeholder="Number" />
          </Label>
          <ErrorMessage name="number" />
          <Button type="submit" aria-label="add contact">
            <BsFillPersonPlusFill />
          </Button>
        </Forma>
      </Formik>
    </div>
  );
}

export default Form;
