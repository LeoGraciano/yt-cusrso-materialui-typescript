import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers"
export default function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </main>
  )
}

