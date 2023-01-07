import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import { Box, Link, Flex, Button } from "@chakra-ui/react";
import { currentBgColor, currentBgShadow } from "../../AppStyles";

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Flex alignItems="center" w="100%">
      <Link
        as={(props) => (
          <NavLink
            {...props}
            style={({ isActive }) => {
              return { boxShadow: isActive ? `${currentBgShadow}` : "none", background : isActive ? `${currentBgColor}` : 'inherit' };
            }}
          />
        )}
        to="contacts"
        display='block'
        mr="auto"
        borderRadius={8}
        p={1}
      >
        Contacts
      </Link>
      <Box as="p" mr="10">
        Welcome, {user.name}!
      </Box>
      <Button
        onClick={logOutHandler}
        type="button"
        bg="pink"
        borderRadius="md"
        px={3}
        py={1}
        _hover={{ bg: "teal" }}
      >
        Log out
      </Button>
    </Flex>
  );
};
