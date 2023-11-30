import React from "react";
import { Box, Form, FormField, Button, Text, Anchor } from "grommet"; // Import Grommet components
import { useState } from "react";
import { login } from "../EspnAPI/ServerApi";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const navigate = useNavigate();
  // two states for username and password
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // handle changes
  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle clicks which redirects the data into API
  // and then later to the server
  const handleOnClick = async () => {
    const apiOutput = await login(username, password);
    console.log(apiOutput.message);

    // Check the message and redirect accordingly
    if (apiOutput.message === "Login successful") {
      // Redirect to the success page
      navigate("/Home");
    } else {
      // Redirect to the login page with an error message
      navigate("/", { errorMessage: apiOutput.message });
    }
  };

  return (
    <Box
      gap="large"
      width="large"
      margin="auto"
      pad="large"
      justify="center"
      height="100vh"
    >
      <Form>
        <FormField
          label="Username"
          name="username"
          onChange={handleChangeUsername}
          id="username"
          placeholder="root"
        />
        <FormField
          label="Password"
          placeholder="Password"
          onChange={handleChangePassword}
          name="password"
          type="password"
        />
        <Button type="submit" primary label="Login" onClick={handleOnClick} />
      </Form>
      <Text 
        size="medium"
        color="placeholder"
        margin={{
          top: "xlarge"
        }
        }
        style={{
          width: "100%",
          textAlign: "center"
        }}>
        Please enter the User and password for mySQL database, it connects to
        the database stored locally called - NBADatabase. 
        You can find the database
        <Anchor
          label=" here."
          href="/your-database-link"
        />
      </Text>
    </Box>
  );
}

export default LoginPage;
