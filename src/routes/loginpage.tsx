// src/components/LoginPage.tsx

import React, { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../store/apis";
import { AppDispatch } from "../store";



const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async () => {
    const response = await dispatch(authorizeUser({ username, password })) ;

    console.log(response)
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
