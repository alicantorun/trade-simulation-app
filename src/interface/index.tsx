export interface IHitrateCalculator {
  desiredProfitFactor?: string | number | undefined;
  hitRateMustExceed?: string | number | undefined;
  profitFactorInR?: string | number | undefined;
  riskPerTrade?: string | number | undefined;
  tradeAmount?: string | number | undefined;
  approximateHitRate?: string | number | undefined;
}
