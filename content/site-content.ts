export type ServiceCard = {
  title: string;
  bullets: string[];
};

export const coreServices: ServiceCard[] = [
  {
    title: "Custom CRM Systems",
    bullets: [
      "Lead & pipeline management",
      "Client lifecycle tracking",
      "Role-based access control",
      "KPI dashboards & analytics"
    ]
  },
  {
    title: "Custom Accounting & Financial Systems",
    bullets: [
      "Revenue/expense tracking",
      "Cash flow monitoring",
      "Audit-ready reporting",
      "Approval workflows"
    ]
  },
  {
    title: "Business Platforms (Internal & External)",
    bullets: [
      "Internal dashboards & ops panels",
      "Client portals",
      "Workflow platforms",
      "Custom integrations"
    ]
  }
];

export const intelligentLayer: ServiceCard[] = [
  {
    title: "AI Social Automation (Chatbots)",
    bullets: [
      "Facebook / Instagram / WhatsApp",
      "Lead capture, routing, human handoff",
      "CRM integration"
    ]
  },
  {
    title: "AI Reporter",
    bullets: [
      "Automated reporting",
      "Structured collection",
      "Summaries and oversight"
    ]
  },
  {
    title: "Embedded AI Assistant (inside CRM/ERP)",
    bullets: [
      "Smart queries",
      "KPI summaries and insights",
      "Workflow recommendations"
    ]
  }
];

export const differentiators = [
  {
    title: "Customized Solutions",
    text: "Built for your real environment, process rules, approvals, and constraints."
  },
  {
    title: "Scalable Systems",
    text: "Architecture and workflows designed to evolve as your operation expands."
  },
  {
    title: "Seamless Integration",
    text: "Fits current operations and data layers instead of forcing operational resets."
  },
  {
    title: "Ongoing Support",
    text: "Continuous optimization and measurable improvements beyond launch."
  }
];

export const industries = [
  {
    title: "Startups & SMEs",
    text: "Move from fragmented tools to one controlled operating layer with clear metrics."
  },
  {
    title: "Corporate & Enterprises",
    text: "Unify business units, strengthen compliance, and improve executive decision speed."
  }
];

export const testimonials = [
  {
    name: "Chief Operating Officer",
    company: "Regional Logistics Group",
    quote:
      "ODIN replaced disconnected workflows with one clear operating layer, giving leadership real control."
  },
  {
    name: "Finance Director",
    company: "Industrial Services Co.",
    quote:
      "The accounting platform gave us audit-ready reporting and a dramatically faster monthly close cycle."
  },
  {
    name: "Digital Transformation Lead",
    company: "Enterprise Retail Network",
    quote:
      "The embedded AI assistant made KPI analysis immediate and actionable for every department head."
  }
];

export const faqs = [
  {
    question: "Do you provide off-the-shelf software?",
    answer:
      "No. ODIN designs and engineers tailored systems aligned with your operational model and data reality."
  },
  {
    question: "How long does implementation usually take?",
    answer:
      "Most engagements launch in phased releases. Initial value is often delivered within 8-12 weeks based on scope."
  },
  {
    question: "Can ODIN integrate with our current tools?",
    answer:
      "Yes. Integration-first architecture is core to our delivery model, including ERP, CRM, finance, and communication channels."
  },
  {
    question: "Is ODIN suitable for enterprise governance needs?",
    answer:
      "Yes. Role-based access, approval workflows, and audit-oriented data structures are built into our system designs."
  },
  {
    question: "Do you support AI inside existing systems?",
    answer:
      "Yes. We embed practical AI assistants and automation modules directly in your workflows and reporting layers."
  },
  {
    question: "What happens after launch?",
    answer:
      "ODIN provides ongoing support, optimization, and roadmap expansion to ensure sustained operational improvements."
  }
];

export const contactServiceOptions = [
  "Custom CRM Systems",
  "Custom Accounting & Financial Systems",
  "Business Platforms",
  "AI Social Automation",
  "AI Reporter",
  "Embedded AI Assistant",
  "Full Enterprise Transformation"
];
