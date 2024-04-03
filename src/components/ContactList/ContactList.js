import { StyledList, StyledBtn, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contactsFilter = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {isLoading && <b>Loading....</b>}
      {error && <b>Some Error</b>}
      {contactsFilter.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            {name}: {number}
            <StyledBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </StyledBtn>
          </Item>
        );
      })}
    </StyledList>
  );
};
