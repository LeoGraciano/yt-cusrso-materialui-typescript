import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { ListTool } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";
import { CategoriesService } from "../../shared/services/entity";
import { useDebounce } from "../../shared/hooks";

export const ListCategories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const search = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      CategoriesService.getAll(1, search).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);
        }
      });
    });
  }, [search]);

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
      Test
    </LayoutBasePage>
  );
};
