import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../../redux/contacts/operations";
import { Box, Button, Flex, Image, ListItem } from "@chakra-ui/react";

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ListItem
      key={contact.id}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      _even={{ bg: "#e9ebf0" }}
    >
      <Flex mr={4}>
        <Image
          src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png"
          alt="user"
          mr={4}
        />
        <Flex>
          <Box as="p" mr={4}>
            {contact.name}
          </Box>
          <Box as="p">{contact.number}</Box>
        </Flex>
      </Flex>
      <Button
        type="button"
        onClick={handleDelete}
        bg="inherit"
        _hover={{ color: "red" }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
