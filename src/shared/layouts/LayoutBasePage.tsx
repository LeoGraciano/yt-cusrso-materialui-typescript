import React from "react";
import { Box } from "@mui/system";
import {
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDrawerContext } from "../contexts";

interface ILayoutBasePageProps {
  children: React.ReactNode;
  title: string;
  toolKitBar?: React.ReactNode;
}

export const LayoutBasePage: React.FC<ILayoutBasePageProps> = ({
  children,
  title,
  toolKitBar,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const theme = useTheme();
  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace={"nowrap"}
        >
          {title}
        </Typography>
      </Box>
      {toolKitBar && <Box>{toolKitBar}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
