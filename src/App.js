import Layout from "./containers/Layout/Layout";
import { FiltersProvider } from "./contexts/filters-context";

import "./App.css";

function App() {
  return (
    <FiltersProvider>
      <Layout />
    </FiltersProvider>
  );
}

export default App;
