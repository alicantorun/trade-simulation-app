export const simulator = ({
  riskFactorRinPerDefinition = 1,
  startingEquity = 10000,
  profitFactorInR,
  riskPerTrade,
  tradeAmount,
  approximateHitRate,
}) => {
  let arr = [];

  // No need
  const desiredProfitFactor = null;
  const hitRateMustExceed = null;

  // Needed
  // const riskFactorRinPerDefinition = 1;
  // const startingEquity = 10000;
  // const profitFactorInR = 1.1;
  // const riskPerTrade = 0.01;
  // const tradeAmount = 50;
  // const approximateHitRate = 0.5;

  for (let i = 0; i < tradeAmount; i++) {
    // First cycle where values are taken from the function args
    if (i === 0) {
      let riskTrade,
        wL,
        wLinPercentage,
        wLAmount,
        drawdown,
        newArr,
        equity = startingEquity;

      riskTrade = equity * riskPerTrade;

      // W/L
      wL = Math.floor(Math.random() * 2) > approximateHitRate ? 0 : 1;

      // W/L in %
      wLinPercentage =
        wL === 0
          ? -riskFactorRinPerDefinition * riskPerTrade
          : profitFactorInR * riskPerTrade;

      // W/L Amount
      wLAmount = equity * wLinPercentage;

      // Equity
      equity = equity + wLAmount;

      // Drawdown
      drawdown = equity / Math.max(startingEquity, equity);

      // newArr Order = [Risk/Trade, W/L, W/L in %, W/L Amount, Drawdown, Equity]
      newArr = [i, riskTrade, wL, wLinPercentage, wLAmount, drawdown, equity];
      arr.push(newArr);
    } else {
      // Following cycles where values are taken from the previous cycles
      let riskTrade, wL, wLinPercentage, wLAmount, drawdown, newArr, equity;

      wL = Math.floor(Math.random() * 2) > approximateHitRate ? 0 : 1;
      wLinPercentage = arr[i - 1][3];
      wLAmount = arr[i - 1][4];
      drawdown = arr[i - 1][5];
      equity = arr[i - 1][6];

      riskTrade = equity * riskPerTrade;

      // W/L in %
      wLinPercentage =
        wL === 0
          ? -riskFactorRinPerDefinition * riskPerTrade
          : profitFactorInR * riskPerTrade;

      // W/L Amount
      wLAmount = equity * wLinPercentage;

      // Equity
      equity = equity + wLAmount;

      // Drawdown
      drawdown = equity / Math.max(...arr.map((y) => y[6]));

      // newArr Order = [Risk/Trade, W/L, W/L in %, W/L Amount, Drawdown, Equity]
      newArr = [i, riskTrade, wL, wLinPercentage, wLAmount, drawdown, equity];
      arr.push(newArr);
    }
  }

  return arr;
};
