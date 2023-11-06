import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import { ListCategories } from "../pages";

export default function AppRoutes() {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "Home",
        path: "/home",
      },
      {
        icon: "paid",
        label: "Despesas",
        path: "/despesas",
      },
      {
        icon: "list",
        label: "Categorias",
        path: "/categorias",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/categorias" element={<ListCategories />} />
      <Route path="/categorias/detalhe/:uuid" element={<ListCategories />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
