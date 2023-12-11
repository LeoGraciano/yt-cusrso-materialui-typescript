import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppTable, ListTool } from "../../shared/components";
import { useDebounce } from "../../shared/hooks";
import { LayoutBasePage } from "../../shared/layouts";
import { CategoriesService } from "../../shared/services/entity";

export const ListCategories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      CategoriesService.getAll(1, search).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          const data_columns: GridColDef[] = [
            // { field: "id", headerName: "ID", width: 300 },
            { field: "name", headerName: "Nome", width: 130 },
          ];
          const data_rows: GridRowsProp = result.data;

          setColumns(data_columns);
          setRows(data_rows);
        }
      });
    });
  }, [debounce, search]);

  return (
    <LayoutBasePage
      title="Listagem de categorias"
      toolkit={
        <ListTool
          textNewButton="Nova"
          showInputSearch
          textSearch={search}
          whenChangeTextSearch={(search) =>
            setSearchParams({ busca: search }, { replace: true })
          }
        />
      }
    >
      <AppTable rows={rows} columns={columns} isLoading={isLoading} />
    </LayoutBasePage>
  );
};
