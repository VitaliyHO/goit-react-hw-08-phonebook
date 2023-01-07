import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectContacts } from "../../../redux/contacts/selectors";
import { addContact } from "../../../redux/contacts/operations";
import { Box, Button, Input } from "@chakra-ui/react";

export const AddContactForm = () => {
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");

  const inputNameId = nanoid();
  const inputPhoneId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [showAddForm, SetShowAddForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const addContactName = userName;
    const findContact = contacts.find((elem) => elem.name === addContactName);
    if (findContact) {
      const message = `${addContactName} is already in contacts`;
      return alert(message);
    }
    dispatch(addContact({ name: addContactName, number: number }));
    console.log(addContactName, number);
    reset();
  };

  const reset = () => {
    setUserName("");
    setNumber("");
  };

  const showFormBtnHandler = () => {
    if (showAddForm) {
      return SetShowAddForm(false);
    }
    SetShowAddForm(true);
  };

  return (
    <>
      <Button
        onClick={showFormBtnHandler}
        mb={4}
        w="100%"
        fontSize="lg"
        alignItems='center'
        colorScheme="teal"
      >
        {showAddForm ? "Hide the add panel" : "Add contact"}
      </Button>
      {showAddForm && (
        <Box
          as="form"
          onSubmit={handleSubmit}
          textAlign="left"
          p={4}
          border="1px solid #ccccee"
          borderRadius="6"
        >
          <label htmlFor={inputNameId}>Name</label>
          <Input
            type="text"
            id={inputNameId}
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            variant="flushed"
            size="md"
          />

          <label htmlFor={inputPhoneId}>Number</label>
          <Input
            type="tel"
            id={inputPhoneId}
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            variant="flushed"
            size="md"
            mb={4}
          />

          <Button
            type="submit"
            colorScheme="teal"
            // isLoading={isLoading}
            _hover={{ bg: "pink", color: "#000" }}
          >
            Add contact
          </Button>
        </Box>
      )}
    </>
  );
};
