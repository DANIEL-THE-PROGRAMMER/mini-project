import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface CustomTextFieldProps {
  label: string;
  name: string;
  type?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  type = "text",
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      label={label}
      type={type}
      fullWidth
      margin="normal"
      variant="outlined"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      InputProps={{ autoComplete: "off" }}
    />
  );
};

export default CustomTextField;
