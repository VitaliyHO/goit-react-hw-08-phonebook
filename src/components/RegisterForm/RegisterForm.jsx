import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";

export const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const emailInputId = nanoid();
  const passInputId = nanoid();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: userName,
        email: userEmail,
        password: userPassword,
      })
    );
    console.log(form.elements.name.value);
    reset();
  };

  const reset = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <>
      
      <Box as="form" onSubmit={onSubmitHandler} w="30vw" mx="auto" mb={4}>
        <Input 
        name="name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        mb={2}
        />
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
          // isLoading={isLoading}
          _hover={{ bg: "pink", color: "#000" }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};
