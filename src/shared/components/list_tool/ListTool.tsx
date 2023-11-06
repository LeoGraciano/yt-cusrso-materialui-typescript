import { Box, Button, Icon, TextField } from "@mui/material";
import { ToolBarBase } from "../../layouts";

interface IListToolProps {
  textSearch?: string;
  showInputSearch?: boolean;
  whenChangeTextSearch?: (newText: string) => void;
  textNewBottom?: string;
  showNewBottom?: boolean;
  whenClickNewBottom?: () => void;
}

export const ListTool: React.FC<IListToolProps> = ({
  textSearch = "",
  showInputSearch = false,
  whenChangeTextSearch,
  textNewBottom = "Novo",
  showNewBottom = true,
  whenClickNewBottom,
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
        {showNewBottom && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            endIcon={<Icon>add</Icon>}
          >
            {textNewBottom}
          </Button>
        )}
      </Box>
    </ToolBarBase>
  );
};
