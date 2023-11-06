import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

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
  const theme = useTheme();
  return (
    <Box
      display="flex"
      gap={1}
      alignItems="center"
      marginX={1}
      padding={1}
      paddingX={2}
      height={theme.spacing(5)}
      component={Paper}
    >
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
    </Box>
  );
};
