// src/components/LoginPage.tsx

import React, { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h4">Login</Typography>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "20px",
              padding: "10px",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
