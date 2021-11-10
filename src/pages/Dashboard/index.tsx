import React, { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeBanner from "@/components/WelcomeBanner";

import { IHitrateCalculator } from "@/interface/index";
import Calculator from "@/components/Dashboard/Calculator";
import SimulationPermanceGraph from "@/components/Dashboard/SimulationPermanceGraph";
import { simulator } from "@/utils/Simulator";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [simulatedData, setSimulatedData] = useState([]);

  const onClickSimulateHandler = (values: IHitrateCalculator) => {
    // console.log(values);
    setSimulatedData(simulator(values as any) as any);
  };

  console.log(simulatedData);

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

              <SimulationPermanceGraph data={simulatedData.map((a) => a[1])} />

              {/* Simulation graph 1 */}
              <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100 flex items-center">
                  <h2 className="font-semibold text-gray-800">
                    SIMMULATION PERFORMANCE GRAPH 1
                  </h2>
                </header>
              </div>

              <SimulationPermanceGraph data={simulatedData.map((a) => a[5])} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
