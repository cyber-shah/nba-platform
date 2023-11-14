import { Box, Form, FormField, Button } from 'grommet';

function LoginPage() {
  return (
      <Box width="medium" margin="auto">
        <Form>
          <FormField label="Username" name="username" />
          <FormField label="Password" name="password" type="password" />
          <Button type="submit" primary label="Submit" />
        </Form>
      </Box>
  );
}

export default LoginPage;