import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import { Environment } from "../../environment";

interface IFilterComponentProps {
  selectFields: { field: string; headerName: string }[];
  selectSearch: string;
  textSearch: string;
  onFieldChange: (selectedField: string) => void;
  onTextSearchChange: (searchText: string) => void;
}

export const FilterField: React.FC<IFilterComponentProps> = ({
  selectFields,
  selectSearch,
  textSearch,
  onFieldChange,
  onTextSearchChange,
}) => {
  return (
    <>
      <FormControl component={Box} sx={{ minWidth: "100px" }}>
        <InputLabel id="select-filters" size="small">
          Coluna
        </InputLabel>
        <Select
          size="small"
          labelId="select-filters"
          id="select-filters"
          value={selectSearch}
          label="Coluna"
          onChange={(event: SelectChangeEvent) =>
            onFieldChange(event.target.value as string)
          }
        >
          {selectFields.map((row) => (
            <MenuItem key={row.field} value={row.field}>
              {row.headerName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        size="small"
        placeholder={Environment.INPUT_SEARCH}
        value={textSearch}
        onChange={(event) => onTextSearchChange(event.target.value)}
        disabled={!selectSearch}
      />
    </>
  );
};
