import Layout from "./containers/Layout/Layout";

import { FiltersProvider } from "./contexts/filters-context";
import { BagProvider } from "./contexts/bag-modal-context";

import "./App.css";

function App() {
  return (
    <BagProvider>
      <FiltersProvider>
        <Layout />
      </FiltersProvider>
    </BagProvider>
  );
}

export default App;
