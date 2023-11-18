import React from "react";
import { Box, Form, FormField, Button } from "grommet"; // Import Grommet components
import { useState } from "react";
import { login } from "../api";


function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnClick = () => {
    const apiOutput = login(username, password);
    console.log(apiOutput);
  };

  return (
    <Box
      gap="large"
      width="medium"
      margin="auto"
      pad="large"
      height="large"
      justify="center"
    >
      <Form>
        <FormField
          label="Username"
          name="username"
          onChange={handleChangeUsername}
          id="username"
          placeholder="mySQL username"
        />
        <FormField
          label="Password"
          placeholder="Password"
          onChange={handleChangePassword}
          name="password"
          type="password"
        />
        <Button
          type="submit"
          primary
          label="Login"
          onClick={handleOnClick}
        />
      </Form>
    </Box>
  );
}

export default LoginPage;
