import type { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  summary: string;
  children: ReactNode;
}

export function FeatureSection({ title, summary, children }: FeatureSectionProps) {
  return (
    <section className="feature-section">
      <header>
        <h2>{title}</h2>
        <p>{summary}</p>
      </header>
      <div>{children}</div>
    </section>
  );
}

