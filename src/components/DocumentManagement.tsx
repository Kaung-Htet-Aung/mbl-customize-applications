import type { AppLink } from "@/data/apps";
import AppCard from "./AppCard";
import styles from "./DocumentManagement.module.css";

export default function DocumentManagement({ apps }: { apps: AppLink[] }) {
  return (
    <section className={styles.documentManagement} aria-labelledby="apps-heading">
      <h2 id="apps-heading" className="sr-only">
        Applications
      </h2>

      <div className={styles.grid}>
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
