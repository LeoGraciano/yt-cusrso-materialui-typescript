import { Box, Button, Icon } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FilterField } from "..";
import { ToolBarBase } from "../../layouts";

interface ISelectFieldProps {
  field: string;
  headerName: string;
}

interface IListToolProps {
  selectFields?: ISelectFieldProps[];
  selectSearch?: string;
  textSearch?: string;
  showInputSearch?: boolean;
  whenChangeSelectSearch?: (newText: string) => void;
  whenChangeTextSearch?: (newText: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  whenClickNewButton?: () => void;
}

export const ListTool: React.FC<IListToolProps> = ({
  selectFields = [],
  selectSearch = "",
  textSearch = "",
  showInputSearch = false,
  whenChangeSelectSearch,
  whenChangeTextSearch,
  textNewButton = "Novo",
  showNewButton = true,
  whenClickNewButton,
}) => {
  const [selectField, setSelectField] = useState(selectSearch);

  const handleFieldChange = (selectedField: string) => {
    setSelectField(selectedField);
    whenChangeSelectSearch?.(selectedField);
  };

  const handleTextSearchChange = (searchText: string) => {
    whenChangeTextSearch?.(searchText);
  };

  return (
    <ToolBarBase>
      {showInputSearch && (
        <FilterField
          selectFields={selectFields}
          selectSearch={selectField}
          textSearch={textSearch}
          onFieldChange={handleFieldChange}
          onTextSearchChange={handleTextSearchChange}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Link to={whenClickNewButton}>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              endIcon={<Icon>add</Icon>}
            >
              {textNewButton}
            </Button>
          </Link>
        )}
      </Box>
    </ToolBarBase>
  );
};
