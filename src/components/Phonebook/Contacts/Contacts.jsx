import { ContactsItem } from "./ContactsItem/ContactsItem";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../../redux/contacts/selectors";
import { selectFilterValue } from "../../../redux/filter/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/operations";
import { UnorderedList } from "@chakra-ui/react";

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = filteredName
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filteredName.toLowerCase())
      )
    : contacts;

  return (
      <UnorderedList listStyleType='none'>
        {visibleContacts.length ? (
          visibleContacts.map((contact) => {
            return <ContactsItem contact={contact} />;
          })
        ) : (
          <h2>No contacts found. Click the Add Contact button to open the add form.</h2>
        )}
      </UnorderedList>
  );
};
