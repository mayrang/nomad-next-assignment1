"use client";
import { Data } from "@/app/person/[id]/page";
import React from "react";
import styles from "./profile.module.css";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/lib/constants";
export default function Profile({ squareImage, name, bio, industries, country, netWorth }: Data) {
  return (
    <div className={styles.profile}>
      <Image
        height={350}
        width={350}
        style={{ objectFit: "cover" }}
        alt={`${name}'s image`}
        src={squareImage !== "https:undefined" ? squareImage : DEFAULT_IMAGE}
      />
      <h3 className={styles.title}>{name}</h3>
      <span className={styles["sub-title"]}>Networth: {`${Math.ceil(netWorth / 1000)} Billion`}</span>
      <span className={styles["sub-title"]}>Country: {country}</span>
      <span className={styles["sub-title"]}>Industry: {industries.join(",")}</span>
      <p className={styles.content}>{bio.join(" ")}</p>
    </div>
  );
}
