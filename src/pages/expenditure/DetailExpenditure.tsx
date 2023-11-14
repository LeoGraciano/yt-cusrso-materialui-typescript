import { LinearProgress } from "@mui/material";
import { Form } from "@unform/web";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  EXPENDITURE,
  EXPENDITURE_EDIT,
  EXPENDITURE_ENDPOINT,
} from "../../routers";
import { DetailTool } from "../../shared/components";
import { CustomTextField } from "../../shared/forms";
import { LayoutBasePage } from "../../shared/layouts";
import { AppCRUD } from "../../shared/services/crud/AppCrud";
import { IExpenseDetail } from "../../shared/services/entity";
interface IDetailExpenditureProps {
  title?: string;
}

export const DetailExpenditure: React.FC<IDetailExpenditureProps> = () => {
  const urlRelative = EXPENDITURE_ENDPOINT;
  const { uuid = "" } = useParams<"uuid">();
  const isUUID = uuid?.length === 36 ? true : false;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");

  const handleSave = () => {
    console.log("Save");
  };
  const handleDelete = (id: string) => {
    AppCRUD.deleteById(urlRelative, id).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        alert("Registro excluído com sucesso!");
        navigate(EXPENDITURE);
      }
    });
  };

  useEffect(() => {
    if (isUUID) {
      setIsLoading(true);
      AppCRUD.getById(urlRelative, uuid).then(
        (response: IExpenseDetail | Error) => {
          setIsLoading(false);
          if (response instanceof Error) {
            alert(response.message);
            navigate(EXPENDITURE);
          } else {
            setDescription(response.description);
            console.log(response);
          }
        }
      );
    }
  }, [uuid]);

  return (
    <LayoutBasePage
      title={isUUID ? description : "Nova despesa"}
      toolkit={
        <DetailTool
          textNewButton="Nova"
          showSaveCloserButton
          showCleanButton={isUUID}
          whenClickSaveButton={handleSave}
          whenClickSaveCloserButton={handleSave}
          whenClickCleanButton={() => handleDelete(uuid)}
          whenClickNewButton={() => navigate(`${EXPENDITURE_EDIT}nova`)}
          whenClickBackButton={() => navigate(`${EXPENDITURE}`)}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" color="primary" />}
      <Form onSubmit={(data) => console.log(data)}>
        <CustomTextField name="description" label="Descrição" />
        <button type="submit">enviar</button>
      </Form>
    </LayoutBasePage>
  );
};
