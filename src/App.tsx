import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import { SideBar } from "./shared/components";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";

export default function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideBar>
            <AppRoutes />
          </SideBar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}
