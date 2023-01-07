import { Box, Container, Heading } from "@chakra-ui/react";
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {

    const {isLoggedIn, user} = useAuth();

    return(
        <Container textAlign='center' py={10}>
        <Heading as='h1' mb={10}>Welcome {isLoggedIn ? `${user.name}` : ''} to the Phonebook application!</Heading>
        <Box as="p" fontSize={20}>{isLoggedIn ? 'You can go to the Contacts page to view your phone book.' : 'You can sign in to your account or register if you haven`t already.'}</Box>
        </Container>
    )
}