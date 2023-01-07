import { useDispatch, useSelector } from "react-redux";
import { setFilteredName } from "../../../redux/filter/slice";
import { Box, Input } from "@chakra-ui/react";
import { selectContacts } from "../../../redux/contacts/selectors";

export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    dispatch(setFilteredName(event.target.value));
  };
  const contacts = useSelector(selectContacts);

  return (
    contacts.length > 1 ? <label htmlFor="">
      <Box as="p" mb={4} fontWeight={600}>
        Find contacts by name
      </Box>
      <Input onInput={handleSearch} name="filter" mb={8} />
    </label> : <></>
  );
};
