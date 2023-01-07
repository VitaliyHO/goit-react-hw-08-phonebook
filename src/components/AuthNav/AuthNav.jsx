import { NavLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";
import { currentBgColor, currentBgShadow } from "../../AppStyles";

export const AuthNav = () => {
  return (
    <Box as="div" ml="auto">
      <Link
        as={(props) => (
          <NavLink
            {...props}
            style={({ isActive }) => {
              return { boxShadow: isActive ? `${currentBgShadow}` : "none", background : isActive ? `${currentBgColor}` : 'inherit' };
            }}
          />
        )}
        to="login"
        mr="5"
        borderRadius={8}
        p={1}
      >
        Sign In
      </Link>
      <Link
        as={(props) => (
          <NavLink
            {...props}
            style={({ isActive }) => {
              return { boxShadow: isActive ? `${currentBgShadow}` : "none", background : isActive ? `${currentBgColor}` : 'inherit' };
            }}
          />
        )}
        to="register"
        borderRadius={8}
        p={1}
      >
        Sign Up
      </Link>
    </Box>
  );
};
