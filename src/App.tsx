import { useTranslation } from "@clocale/react";
import "./App.css";

function App() {
  const { t } = useTranslation("menu");

  return (
    <div>
      <h2>This is a playground dummy</h2>
      <p>{t("dashboard.project")}</p>
    </div>
  );
}

export default App;
