import { ToolKitBar } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";

export default function Dashboard() {
  return (
    <LayoutBasePage
      title="Pagina Inicial"
      toolKitBar={<ToolKitBar showInputSearch />}
    >
      Testando
    </LayoutBasePage>
  );
}
