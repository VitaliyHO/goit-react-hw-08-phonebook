import { Container, Heading } from "@chakra-ui/react";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { Contacts } from "./Contacts/Contacts";
import { Search } from "./Search/Search";

export const Phonebook = () => {
  return (
    <Container textAlign='center' py={10}>
      <Heading as="h1" size="lg" mb={10}>
        Phonebook
      </Heading>
      <AddContactForm />
      <Heading as="h2" size='md' mb={8}>Contacts</Heading>
      <Search />
      <Contacts />
    </Container>
  );
};
