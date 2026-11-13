import Image from "next/image";
import DocumentManagement from "@/components/DocumentManagement";
import { apps } from "@/data/apps";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Image
            className={styles.brandLogo}
            src="/icons/header-logo.png"
            alt="Company logo"
            width={96}
            height={96}
            priority
          />
          <h1 className={styles.title}>MBL Customize Applications</h1>
          
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        <DocumentManagement apps={apps} />
      </main>

      <footer className={styles.footer}>
        <p>Developed By MIS - Application Team</p>
      </footer>
    </div>
  );
}
