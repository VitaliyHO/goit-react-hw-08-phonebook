import { Box, Container, Heading } from "@chakra-ui/react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <Container textAlign="center" py={10}>
      <Heading as="h2" mb={8} size="lg">
        Please enter your email address and password to login
      </Heading>
      <LoginForm />
      <Box as="p">
        Don't have an account? Please{" "}
        <Box as={NavLink} to="/register" color="#ff0000">
          register
        </Box>
        !
      </Box>
    </Container>
  );
};
