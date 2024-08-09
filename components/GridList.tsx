"use client";
import React, { useEffect, useState } from "react";
import styles from "./gridList.module.css";
import Link from "next/link";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/lib/constants";

interface Data {
  id: string;
  name: string;
  netWorth: number;
  industries: string[];
  squareImage: string;
}

export default function GridList() {
  const [data, setData] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://billions-api.nomadcoders.workers.dev/")
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
    <div className={styles["main-grid"]}>
      {data &&
        data.map((person) => (
          <Link href={`/person/${person.id}`} className={styles.card} key={person.id}>
            <Image
              width={300}
              height={300}
              src={person.squareImage !== "https:undefined" ? person.squareImage : DEFAULT_IMAGE}
              alt={`${person.name}'s Image`}
              className={styles["card-img"]}
            />

            <div className={styles["card-text"]}>
              <h4 className={styles["card-title"]}>{person.name}</h4>
              <div className={styles["card-subTitle"]}>
                <span>{`${Math.ceil(person.netWorth / 1000)}Billion / `}</span>
                <span>{person.industries.join(", ")}</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
