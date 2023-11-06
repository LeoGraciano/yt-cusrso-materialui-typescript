import { Button, Divider, Icon, Skeleton } from "@mui/material";
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
  return (
    <ToolBarBase>
      {showNewButtonLoader && <Skeleton width={110} height={60} />}
      {showNewButton && !showNewButtonLoader && (
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
      {showSaveButtonLoader && <Skeleton width={110} height={60} />}
      {showSaveButton && !showSaveButtonLoader && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {showSaveCloseButtonLoader && <Skeleton width={180} height={60} />}
      {showSaveCloseButton && !showSaveCloseButtonLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickSaveCloseButton}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
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
          Limpar
        </Button>
      )}
      {showBackButtonLoader && <Skeleton width={110} height={60} />}
      {showBackButton && <Divider variant="middle" orientation="vertical" />}
      {showBackButton && !showBackButtonLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </ToolBarBase>
  );
};
