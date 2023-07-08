import { Formik, ErrorMessage } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useToast } from '@chakra-ui/react';

import { SignupSchema } from '../../options/validForm';
import { Label, Forma, Input, Button } from './Forma.styled';
import { addContacts } from 'redux/contacts/contactsOperations';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';

function Form() {
  const name = '';
  const number = '';

  const data = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const find = data.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (!find) {
      dispatch(addContacts({ id: nanoid(), name, number }));
      toast({
        title: 'Add contact.',
        description: `Your contact ${name} has been added.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      resetForm();
      return;
    }
    toast({
      title: 'Add contact.',
      description: `${name} already in contacts.`,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
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
