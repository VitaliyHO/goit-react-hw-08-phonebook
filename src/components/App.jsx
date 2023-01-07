import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Phonebook } from "./Phonebook/Phonebook";
import { Layout } from "./Layout";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    "Loading content..."
  ) : (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Phonebook} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};
