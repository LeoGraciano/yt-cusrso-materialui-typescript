import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";

export default function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <main className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
    </ThemeProvider>
  );
}
