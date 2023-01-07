import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { Flex, Link } from "@chakra-ui/react";
import { currentBgColor, currentBgShadow } from "../../AppStyles";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="nav"
      justifyContent="center"
      alignItems="center"
      px={10}
      py={2}
      w="100%"
      h={12}
      bg="#f5f0f6"
    >
      <Link
        as={(props) => (
          <NavLink
            {...props}
            style={({ isActive }) => {
              return { boxShadow: isActive ? `${currentBgShadow}` : "none", background : isActive ? `${currentBgColor}` : 'inherit' };
            }}
          />
        )}
        to="/"
        mr="10"
        borderRadius={8}
        p={1}
      >
        Home
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
