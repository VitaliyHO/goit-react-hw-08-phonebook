import { Box, Container, Heading } from "@chakra-ui/react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { NavLink } from "react-router-dom";

export const Register = () => {
    return(
        <Container textAlign='center' py={10}>
        <Heading as='h2' mb={8} size='lg' >Please type your name, email address and password to register</Heading>
        <RegisterForm />
        <Box as="p">Alredy registered? Please <Box as={NavLink} to='/login' color='red'>login</Box>!</Box>
        </Container>

    )
}