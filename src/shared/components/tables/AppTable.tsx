import { Typography } from "@material-ui/core";
import { Box, LinearProgress } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridOverlay,
  GridRowsProp,
  ptBR,
} from "@mui/x-data-grid";
import { useState } from "react";
import { Environment } from "../../environment";

const CustomNoRowsOverlay = () => (
  <GridOverlay>
    <Typography variant="h6" color="textSecondary">
      {Environment.LIST_NOT_FOUND}
    </Typography>
  </GridOverlay>
);

export function AppTable({
  rows,
  columns,
  isLoading = false,
}: {
  rows: GridRowsProp;
  columns: GridColDef[];
  isLoading: boolean;
}) {
  const [, setPagination] = useState({});

  const handlePaginationModelChange = (params: {
    page: number;
    pageSize: number;
  }) => {
    console.log(`Página atual: ${params.page + 1}`);
    console.log(`Itens por página: ${params.pageSize}`);
    setPagination(params);
    // Você pode fazer o que quiser com a informação da página aqui
  };
  let height = {};
  if (rows.length > 1) {
    height = "auto";
  } else {
    height = "100%";
  }
  return (
    <Box width="auto" height={height} margin={1}>
      {!isLoading && (
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            noRowsOverlay: CustomNoRowsOverlay,
          }}
          onPaginationModelChange={handlePaginationModelChange}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: Environment.LIMIT_ROWS,
              },
            },
          }}
          pageSizeOptions={[Environment.LIMIT_ROWS, Environment.LIMIT_ROWS * 2]}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
      )}
      {isLoading && <LinearProgress variant="indeterminate" />}
    </Box>
  );
}
