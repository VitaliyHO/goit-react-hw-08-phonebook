import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const emailInputId = nanoid();
  const passInputId = nanoid();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: userEmail,
        password: userPassword,
      })
    );
    reset();
  };

  const reset = () => {
    setUserEmail("");
    setUserPassword("");
  };

  return (
      <Box as="form" onSubmit={onSubmitHandler} w="30vw" mx="auto" mb={4}>
        <Input
          name="email"
          id={emailInputId}
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          placeholder="E-mail"
          mb={2}
        />
        <Input
          name="password"
          id={passInputId}
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
          placeholder="Password"
          mb={4}
        />
        <Button
          type="submit"
          display="block"
          mx="auto"
          colorScheme="teal"
          isLoading={isLoading}
          _hover={{ bg: "pink", color: "#000" }}
        >
          Log In
        </Button>
      </Box>
  );
};
