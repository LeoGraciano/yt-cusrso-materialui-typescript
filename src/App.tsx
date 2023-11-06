import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { SideBar } from "./shared/components";

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
