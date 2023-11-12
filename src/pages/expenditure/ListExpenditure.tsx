import { Box, Icon, IconButton } from "@mui/material";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AppTable, ListTool } from "../../shared/components";
import { useDebounce } from "../../shared/hooks";
import { LayoutBasePage } from "../../shared/layouts";
import { AppCRUD } from "../../shared/services/crud/AppCrud";

export const ListExpenditure: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchField, setSearchField] = useState();
  const { debounce } = useDebounce();
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectFields, setSelectFields] = useState([]);

  const search = useMemo(() => {
    return searchParams.get(`busca`) || "";
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      AppCRUD.getAll("/expenditure/", searchField, search).then((result) => {
        setIsLoading(false);
        const dataColumns: GridColDef[] = [
          { field: "description", headerName: "Descrição", flex: 1 },
          { field: "value", headerName: "Valor", width: 70 },
          { field: "date", headerName: "Data", width: 130 },
          { field: "created_by", headerName: "Criado por", flex: 1 },
          {
            field: "categories_display",
            headerName: "Categorias",
            flex: 1,
          },
          {
            field: "actions",
            headerName: "Ações",
            width: 120,
            renderCell: (params) => (
              <Box>
                <Link to={`/detalhes/${params.row.id}`}>
                  <IconButton color="info">
                    <Icon>edit</Icon>
                  </IconButton>
                </Link>
                <IconButton color="info">
                  <Icon>delete</Icon>
                </IconButton>
              </Box>
            ),
          },
        ];
        if (result instanceof Error) {
          alert(result.message);
        } else {
          const dataSelectFields: object[] = [];
          dataColumns.forEach((column) => {
            dataSelectFields.push({
              field: column.field,
              headerName: column.headerName,
            });
          });
          setSelectFields(dataSelectFields);
          const data_rows: GridRowsProp = result.data;
          setColumns(dataColumns);
          setRows(data_rows);
        }
      });
    });
  }, [search, searchField]);

  return (
    <LayoutBasePage
      title="Listagem de despesas"
      toolkit={
        <ListTool
          textNewButton="Nova"
          selectFields={selectFields}
          showInputSearch
          selectSearch={searchField}
          whenChangeSelectSearch={setSearchField}
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
