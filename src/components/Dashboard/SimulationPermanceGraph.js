import { useState, useEffect } from "react";
import Info from "@/utils/Info";
import RealtimeChart from "@/components/Charts/RealtimeChart";
import PercentageChart from "@/components/Charts/PercentageChart";
import { tailwindConfig, hexToRGB } from "@/utils/Utils";

function SimulationPermanceGraph({ data, title, isRealtimeChart }) {
  const [dataState, setDataState] = useState(data);

  useEffect(() => {
    setDataState(data);
  }, [data]);

  const chartData = {
    labels: Array.from(Array(data.length).keys()),
    datasets: [
      {
        data: dataState,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };

  console.log(data);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-sm text-center">
            Overall performance of simulation
          </div>
        </Info>
      </header>
      {isRealtimeChart ? (
        <RealtimeChart data={chartData} width={595} height={248} />
      ) : (
        <PercentageChart data={chartData} width={595} height={248} />
      )}
    </div>
  );
}

export default SimulationPermanceGraph;
