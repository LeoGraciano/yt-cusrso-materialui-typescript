import React from "react";
import { LayoutBasePage } from "../../shared/layouts";

interface IEditExpenditureProps {
  title: string;
}

export const EditExpenditure: React.FC<IEditExpenditureProps> = () => {
  return <LayoutBasePage title="Editar">Teste</LayoutBasePage>;
};
