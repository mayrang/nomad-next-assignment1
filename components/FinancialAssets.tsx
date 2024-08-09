import React from "react";
import styles from "./financialAssets.module.css";
export default function FinancialAssets({
  financialAssets,
}: {
  financialAssets: {
    numberOfShares: number;
    ticker: string;
    exerciseOptionPrice: number;
  }[];
}) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Finalcial Assets</h2>
      <div className={styles.grid}>
        {financialAssets.map((asset, index) => (
          <div className={styles.card} key={index}>
            <span>Ticker: {asset.ticker}</span>
            <span>Shares: {asset.numberOfShares}</span>
            <span>Exercise Price: {asset.exerciseOptionPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
