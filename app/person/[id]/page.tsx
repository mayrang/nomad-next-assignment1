"use client";
import FinancialAssets from "@/components/FinancialAssets";
import Profile from "@/components/Profile";
import React, { useEffect, useState } from "react";

export interface Data {
  id: string;
  name: string;
  netWorth: number;
  country: string;
  industries: string[];
  squareImage: string;
  bio: string[];
  financialAssets: {
    numberOfShares: number;
    ticker: string;
    exerciseOptionPrice: number;
  }[];
}

export default function PersonDetail({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://billions-api.nomadcoders.workers.dev/person/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {data ? (
        <>
          <Profile {...data} /> <FinancialAssets financialAssets={data.financialAssets} />
        </>
      ) : null}
    </div>
  );
}
