import React from "react";
import { Button, Typography, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { authorizeUser } from "../store/apis";
import { AppDispatch } from "../store";
import CustomTextField from "../components/customtextfield";

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleLogin = async (
    values: typeof initialValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { setSubmitting, resetForm }: any
  ) => {
    try {
      await dispatch(authorizeUser(values));
      window.location.href = "/";
      resetForm();
    } catch (error) {
      //console.log(error)
    } finally {
      setSubmitting(false);
    }
  };

  const authString = localStorage.getItem("auth");
  const auth = authString ? JSON.parse(authString) : { authenticated: false };

  if (auth.authenticated) {
    window.location.href = "/";
    return null;
  }

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h4">Login</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <CustomTextField label="Email" name="email" type="email" />
              <CustomTextField
                label="Password"
                name="password"
                type="password"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "20px", padding: "10px" }}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default LoginPage;
