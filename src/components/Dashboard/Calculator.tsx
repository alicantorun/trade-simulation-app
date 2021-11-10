import { useState } from "react";

import { IHitrateCalculator } from "@/interface/index";

interface Props {
  onClickSimulate(hitrateCalculator: IHitrateCalculator): void;
}

const Calculator: React.FC<Props> = ({ onClickSimulate }) => {
  const [hitRateCalculator, setHitRateCalculator] =
    useState<IHitrateCalculator>();

  const onClickHandler = () => {
    onClickSimulate(hitRateCalculator as IHitrateCalculator);
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">HITRATE CALCULATOR</h2>
      </header>
      <div className="grid grid-cols-6 gap-6 p-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Desired Profit Factor
          </label>
          <input
            onChange={(event) =>
              setHitRateCalculator({
                ...hitRateCalculator,
                desiredProfitFactor: parseFloat(event.target.value),
              })
            }
            type="number"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Hit-rate must exceed
          </label>
          <input
            onChange={(event) =>
              setHitRateCalculator({
                ...hitRateCalculator,
                hitRateMustExceed: parseFloat(event.target.value),
              })
            }
            type="number"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Simulation parameters */}
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">SIMULATION PARAMETERS</h2>
      </header>
      <div className="grid grid-cols-6 gap-6 p-6 pb-0">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Profit factor in R
          </label>
          <input
            onChange={(event) =>
              setHitRateCalculator({
                ...hitRateCalculator,
                profitFactorInR: parseFloat(event.target.value),
              })
            }
            type="number"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Risk per trade
          </label>
          <input
            onChange={(event) =>
              setHitRateCalculator({
                ...hitRateCalculator,
                riskPerTrade: parseFloat(event.target.value),
              })
            }
            type="number"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6 p-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Trade Amount
          </label>
          <input
            onChange={(event) =>
              setHitRateCalculator({
                ...hitRateCalculator,
                tradeAmount: parseFloat(event.target.value),
              })
            }
            type="number"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Approximate HIT Rate
          </label>
          <input
            onChange={(event) =>
              setHitRateCalculator({
                ...hitRateCalculator,
                approximateHitRate: parseFloat(event.target.value),
              })
            }
            type="number"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={onClickHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          HIT
        </button>
      </div>
    </div>
  );
};

export default Calculator;
