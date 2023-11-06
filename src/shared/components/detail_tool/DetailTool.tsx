import { Button, Divider, Icon, Skeleton } from "@mui/material";
import { ToolBarBase } from "../../layouts";

interface IDetailToolProps {
  textNewBottom?: string;
  showNewBottom?: boolean;
  showSaveBottom?: boolean;
  showSaveCloseBottom?: boolean;
  showCleanBottom?: boolean;
  showBackBottom?: boolean;

  showNewBottomLoader?: boolean;
  showSaveBottomLoader?: boolean;
  showSaveCloseBottomLoader?: boolean;
  showCleanBottomLoader?: boolean;
  showBackBottomLoader?: boolean;

  whenClickNewBottom?: () => void;
  whenClickSaveBottom?: () => void;
  whenClickSaveCloseBottom?: () => void;
  whenClickCleanBottom?: () => void;
  whenClickBackBottom?: () => void;
}

export const DetailTool: React.FC<IDetailToolProps> = ({
  textNewBottom = "Novo",
  showNewBottom = true,
  showSaveBottom = true,
  showSaveCloseBottom = false,
  showCleanBottom = true,
  showBackBottom = true,
  showNewBottomLoader = false,
  showSaveBottomLoader = false,
  showSaveCloseBottomLoader = false,
  showCleanBottomLoader = false,
  showBackBottomLoader = false,
  whenClickNewBottom,
  whenClickSaveBottom,
  whenClickSaveCloseBottom,
  whenClickCleanBottom,
  whenClickBackBottom,
}) => {
  return (
    <ToolBarBase>
      {showNewBottomLoader && <Skeleton width={110} height={60} />}
      {showNewBottom && !showNewBottomLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickNewBottom}
          startIcon={<Icon>add</Icon>}
        >
          {textNewBottom}
        </Button>
      )}
      {showSaveBottomLoader && <Skeleton width={110} height={60} />}
      {showSaveBottom && !showSaveBottomLoader && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickSaveBottom}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {showSaveCloseBottomLoader && <Skeleton width={180} height={60} />}
      {showSaveCloseBottom && !showSaveCloseBottomLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickSaveCloseBottom}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {showCleanBottomLoader && <Skeleton width={110} height={60} />}
      {showCleanBottom && !showCleanBottomLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickCleanBottom}
          startIcon={<Icon>delete</Icon>}
        >
          Limpar
        </Button>
      )}
      {showBackBottomLoader && <Skeleton width={110} height={60} />}
      {showBackBottom && <Divider variant="middle" orientation="vertical" />}
      {showBackBottom && !showBackBottomLoader && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickBackBottom}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </ToolBarBase>
  );
};
