import { Box, Paper, useTheme } from "@mui/material";

interface IToolBarBase {
  children: React.ReactNode;
}

export const ToolBarBase: React.FC<IToolBarBase> = ({ children }) => {
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
      {children}
    </Box>
  );
};
