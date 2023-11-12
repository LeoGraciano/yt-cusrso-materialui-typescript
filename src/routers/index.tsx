import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { EditExpenditure, ListCategories, ListExpenditure } from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";
import { useDrawerContext } from "../shared/contexts";

export const HOME = "/home/";
export const EXPENDITURE = "/despesas/";
export const EXPENDITURE_EDIT = "/despesas/detalhe/";
export const EXPENDITURE_ENDPOINT = "/expenditure/";
export const CATEGORIES = "/categorias/";
export const CATEGORIES_EDIT = "/categorias/detalhe/";
export const CATEGORIES_ENDPOINT = "/categories/";

export default function AppRoutes() {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "Home",
        path: HOME,
      },
      {
        icon: "paid",
        label: "Despesas",
        path: EXPENDITURE,
      },
      {
        icon: "list",
        label: "Categorias",
        path: CATEGORIES,
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path={`${HOME}`} element={<Dashboard />} />
      <Route path={EXPENDITURE} element={<ListExpenditure />} />
      <Route path={`${EXPENDITURE_EDIT}:uuid`} element={<EditExpenditure />} />
      <Route path={CATEGORIES} element={<ListCategories />} />
      <Route path={`${CATEGORIES_EDIT}:uuid`} element={<ListCategories />} />
      <Route path="*" element={<Navigate to={`${HOME}`} />} />
    </Routes>
  );
}
