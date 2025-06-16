import React, { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { CalciteShell } from "@esri/calcite-components-react";
import MapDisplay from "./components/MapDisplay";
import ActionPanel from "./components/ActionPanel";
import Header from "./components/Header";
import MainChart from "./components/MainChart";
import UndergroundSwitch from "./components/UndergroundSwitch";

type MyDropdownContextType = {
  buildings: any;
  updateBuildings: any;
};

const initialState = {
  buildings: undefined,
  updateBuildings: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});

function App() {
  const [buildings, setBuildings] = useState<any>();

  const updateBuildings = (newBuilding: any) => {
    setBuildings(newBuilding);
  };

  return (
    <div>
      <CalciteShell>
        <MyContext
          value={{
            buildings,
            updateBuildings,
          }}
        >
          <ActionPanel />
          <UndergroundSwitch />
          <MapDisplay />
          <MainChart />
          <Header />
        </MyContext>
      </CalciteShell>
    </div>
  );
}

export default App;
