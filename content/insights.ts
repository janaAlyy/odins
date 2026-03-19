export type InsightSection = {
  heading: string;
  content: string;
};

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  sections: InsightSection[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "from-manual-workflows-to-automated-control",
    title: "From Manual Workflows to Automated Control",
    excerpt:
      "A practical blueprint for replacing spreadsheet operations with controlled, auditable workflows.",
    publishedAt: "2026-01-05",
    readTime: "7 min read",
    sections: [
      {
        heading: "Map process friction before automation",
        content:
          "Most organizations automate symptoms, not bottlenecks. Start by mapping approval delays, duplicate data entry, and reporting latency across teams."
      },
      {
        heading: "Standardize decision checkpoints",
        content:
          "Define clear ownership and automated triggers for handoffs. This ensures workflows move with accountability instead of waiting on manual follow-up."
      },
      {
        heading: "Instrument outcomes",
        content:
          "Attach KPI visibility to every major process stage so leadership can track cycle time, error rates, and intervention points in real time."
      }
    ]
  },
  {
    slug: "designing-a-crm-that-matches-reality",
    title: "Designing a CRM That Matches Reality",
    excerpt:
      "Why custom CRM architecture outperforms rigid templates in complex sales environments.",
    publishedAt: "2026-01-17",
    readTime: "6 min read",
    sections: [
      {
        heading: "Model the real sales lifecycle",
        content:
          "High-performing CRMs mirror business reality: qualification gates, deal complexity, multi-role approvals, and post-sale retention workflows."
      },
      {
        heading: "Build for role-specific execution",
        content:
          "Different teams need different interfaces. Sales leadership, account management, and operations should each see focused actions and metrics."
      },
      {
        heading: "Keep analytics decision-ready",
        content:
          "Pipeline and conversion reporting should reveal root causes quickly, not force manual report consolidation at month end."
      }
    ]
  },
  {
    slug: "operational-dashboards-that-executives-trust",
    title: "Operational Dashboards That Executives Trust",
    excerpt:
      "How to create dashboard systems that are accurate, timely, and actionable at leadership level.",
    publishedAt: "2026-01-24",
    readTime: "5 min read",
    sections: [
      {
        heading: "Single source of truth architecture",
        content:
          "Dashboards fail when metrics are sourced from inconsistent systems. Consolidate data pipelines and enforce metric definitions centrally."
      },
      {
        heading: "Design for exception visibility",
        content:
          "Executives need immediate visibility into anomalies. Use threshold alerts and variance views to direct attention to high-impact issues."
      },
      {
        heading: "Pair overview with drill-down",
        content:
          "Strategic snapshots should connect to operational details so teams can move from insight to action without switching systems."
      }
    ]
  },
  {
    slug: "ai-assistants-inside-erp-practical-use-cases",
    title: "AI Assistants Inside ERP: Practical Use Cases",
    excerpt:
      "A grounded approach to embedding AI inside enterprise platforms for measurable outcomes.",
    publishedAt: "2026-01-30",
    readTime: "8 min read",
    sections: [
      {
        heading: "Natural-language querying for operational data",
        content:
          "Executives and managers can query ERP data in plain language and receive concise KPI summaries without waiting for analyst turnaround."
      },
      {
        heading: "Workflow recommendation engines",
        content:
          "Assistants can highlight next-best actions, bottleneck owners, and recommended approvals based on current process state."
      },
      {
        heading: "Governed assistant behavior",
        content:
          "Enterprise AI must respect permissions, audit trails, and escalation rules. Reliability depends on bounded, transparent behavior."
      }
    ]
  },
  {
    slug: "building-scalable-accounting-systems",
    title: "Building Scalable Accounting Systems",
    excerpt:
      "Engineering finance systems that support growth, compliance, and operational speed.",
    publishedAt: "2026-02-04",
    readTime: "7 min read",
    sections: [
      {
        heading: "Automate recurring controls",
        content:
          "Automate reconciliations, approval chains, and exception handling to reduce finance-team overhead and error risk."
      },
      {
        heading: "Structure reporting for audit readiness",
        content:
          "Use immutable records, role-based approvals, and clear event logs to make compliance audits straightforward."
      },
      {
        heading: "Design for expansion",
        content:
          "Support new entities, currencies, and reporting requirements without requiring fundamental system redesign."
      }
    ]
  },
  {
    slug: "customer-engagement-across-social-channels",
    title: "Customer Engagement Across Social Channels",
    excerpt:
      "How AI social automation drives faster responses and higher quality lead routing.",
    publishedAt: "2026-02-12",
    readTime: "6 min read",
    sections: [
      {
        heading: "Unified intake across channels",
        content:
          "Capture and classify inquiries from Facebook, Instagram, and WhatsApp into one operational queue."
      },
      {
        heading: "Route with context",
        content:
          "Automation should pass customer history, urgency, and segment data to the right team for high-quality handoff."
      },
      {
        heading: "Close the loop in CRM",
        content:
          "Every conversation should sync to CRM and analytics to preserve continuity and improve campaign intelligence."
      }
    ]
  }
];

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((post) => post.slug === slug);
}
