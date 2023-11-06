import { Box, Button, Icon, TextField } from "@mui/material";
import { ToolBarBase } from "../../layouts";

interface IListToolProps {
  textSearch?: string;
  showInputSearch?: boolean;
  whenChangeTextSearch?: (newText: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  whenClickNewButton?: () => void;
}

export const ListTool: React.FC<IListToolProps> = ({
  textSearch = "",
  showInputSearch = false,
  whenChangeTextSearch,
  textNewButton = "Novo",
  showNewButton = true,
  whenClickNewButton,
}) => {
  return (
    <ToolBarBase>
      {showInputSearch && (
        <TextField
          size="small"
          placeholder={"Pesquisar..."}
          value={textSearch}
          onChange={(e) => whenChangeTextSearch?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            endIcon={<Icon>add</Icon>}
          >
            {textNewButton}
          </Button>
        )}
      </Box>
    </ToolBarBase>
  );
};
