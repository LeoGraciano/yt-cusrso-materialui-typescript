import {
  Button,
  Divider,
  Icon,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ToolBarBase } from "../../layouts";

interface IDetailToolProps {
  textNewButton?: string;
  showNewButton?: boolean;
  showSaveButton?: boolean;
  showSaveCloseButton?: boolean;
  showCleanButton?: boolean;
  showBackButton?: boolean;

  showNewButtonLoader?: boolean;
  showSaveButtonLoader?: boolean;
  showSaveCloseButtonLoader?: boolean;
  showCleanButtonLoader?: boolean;
  showBackButtonLoader?: boolean;

  whenClickNewButton?: () => void;
  whenClickSaveButton?: () => void;
  whenClickSaveCloseButton?: () => void;
  whenClickCleanButton?: () => void;
  whenClickBackButton?: () => void;
}

export const DetailTool: React.FC<IDetailToolProps> = ({
  textNewButton = "Novo",
  showNewButton = true,
  showSaveButton = true,
  showSaveCloseButton = false,
  showCleanButton = true,
  showBackButton = true,
  showNewButtonLoader = false,
  showSaveButtonLoader = false,
  showSaveCloseButtonLoader = false,
  showCleanButtonLoader = false,
  showBackButtonLoader = false,
  whenClickNewButton,
  whenClickSaveButton,
  whenClickSaveCloseButton,
  whenClickCleanButton,
  whenClickBackButton,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <ToolBarBase>
      {showSaveButtonLoader && <Skeleton width={110} height={60} />}
      {showSaveButton && !showSaveButtonLoader && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Salvar
          </Typography>
        </Button>
      )}
      {showSaveCloseButtonLoader && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}
      {showSaveCloseButton &&
        !showSaveCloseButtonLoader &&
        !smDown &&
        !mdDown && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={whenClickSaveCloseButton}
            startIcon={<Icon>save</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              Salvar e fechar
            </Typography>
          </Button>
        )}
      {showNewButtonLoader && !smDown && <Skeleton width={110} height={60} />}
      {showNewButton && !showNewButtonLoader && !smDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickNewButton}
          startIcon={<Icon>add</Icon>}
        >
          {textNewButton}
        </Button>
      )}
      {showCleanButtonLoader && <Skeleton width={110} height={60} />}
      {showCleanButton && !showCleanButtonLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickCleanButton}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Limpar
          </Typography>
        </Button>
      )}
      {showBackButtonLoader && <Skeleton width={110} height={60} />}
      {showBackButton &&
        (showCleanButton ||
          showNewButton ||
          showSaveButton ||
          showSaveCloseButton) && (
          <Divider variant="middle" orientation="vertical" />
        )}
      {showBackButton && !showBackButtonLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Voltar
          </Typography>
        </Button>
      )}
    </ToolBarBase>
  );
};
