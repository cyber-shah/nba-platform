import React from "react";
import { Box, Form, FormField, Button } from "grommet"; // Import Grommet components

function LoginPage() {
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
        <FormField label="Username" name="username" />
        <FormField label="Password" name="password" type="password" />
        <Button type="submit" primary label="Login" />
      </Form>
    </Box>
  );
}

export default LoginPage;
