import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type TCustomTextFieldProps = TextFieldProps & {
  name: string;
};

export const CustomTextField: React.FC<TCustomTextFieldProps> = ({
  name,
  ...rest
}) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      {...rest}
      error={!!error}
      defaultValue={defaultValue}
      onKeyDown={() => (error ? clearError() : undefined)}
      helperText={error}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
