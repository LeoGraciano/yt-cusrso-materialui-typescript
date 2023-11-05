import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import { AppThemeProvider } from "./shared/contexts";

export default function App() {
  return (
    <AppThemeProvider>
      <main className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
    </AppThemeProvider>
  );
}
