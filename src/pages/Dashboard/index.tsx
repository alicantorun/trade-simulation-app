import React, { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeBanner from "@/components/WelcomeBanner";

import { IHitrateCalculator } from "@/interface/index";
import Calculator from "@/components/Dashboard/Calculator";
import SimulationPermanceGraph from "@/components/Dashboard/SimulationPermanceGraph";
import SimulationDetailedTable from "@/components/Dashboard/SimulationDetailedTable";
import { simulator } from "@/utils/Simulator";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [simulatedData, setSimulatedData] = useState([]);

  const onClickSimulateHandler = (values: IHitrateCalculator) => {
    setSimulatedData(simulator(values as any) as any);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Main Dashboard */}
            <div className="grid grid-cols-12 gap-6">
              {/* Hit rate calculator */}
              <Calculator onClickSimulate={onClickSimulateHandler} />

              <SimulationPermanceGraph
                title="Overall performance of simulation"
                data={simulatedData.map((a) => a[1])}
                isRealtimeChart={false}
              />

              {/* Simulation graph 1 */}
              <SimulationDetailedTable data={simulatedData} />

              <SimulationPermanceGraph
                title="Overall drawdown of simulation"
                data={simulatedData.map((a) => a[5])}
                isRealtimeChart={true}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
