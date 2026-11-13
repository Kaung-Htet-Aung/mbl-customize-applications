"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { AppLink } from "@/data/apps";
import styles from "./AppCard.module.css";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function AppCard({ app }: { app: AppLink }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logo = app.logo;
  const accent = app.accent ?? "var(--primary)";
  const style = { "--accent": accent } as CSSProperties;

  return (
    <a
      className={styles.card}
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      aria-label={`Open ${app.name} — ${app.description} in a new tab`}
    >
      <span className={styles.logoFrame} aria-hidden="true">
        {logo && !logoFailed ? (
          <Image
            className={styles.logo}
            src={logo}
            alt=""
            width={64}
            height={64}
            unoptimized
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className={styles.initials}>{getInitials(app.name)}</span>
        )}
      </span>

      <span className={styles.copy}>
        <span className={styles.name}>{app.name}</span>
        <span className={styles.description}>{app.description}</span>
      </span>
    </a>
  );
}
