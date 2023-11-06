import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts";

export default function AppRoutes() {
  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            toggle drawer
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
