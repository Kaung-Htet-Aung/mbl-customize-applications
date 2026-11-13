export type AppLink = {
  id: string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  accent?: string;
};

export const apps: AppLink[] = [
  {
    id: "docworkflow",
    name: "Document Workflow",
    description: "workflow and employee master data",
    url: "https://email-recipient-portal.kaunghtetaung374.workers.dev",
    logo: "/icons/document.png",
    accent: "#4285f4",
  },
   {
    id: "medical",
    name: "Medical",
    description: "Medical Benefit Request And Claim",
    url: "https://kmyatlay651gmai-001-site1.ltempurl.com/",
    logo: "/icons/medical.png",
    accent: "#611f69",
  },
   {
    id: "yms",
    name: "YMS",
    description: "CWH (Yard Management System)",
    url: "https://yms.myanmar-brewery.com ",
    logo: "/icons/yms_bg.jpg",
    accent: "#ea4335",
  },
 
  {
    id: "tender",
    name: "Tendering System",
    description: "MBL Transportation Charges Tendering System",
    url: "https://tender.myanmar-brewery.com",
    logo: "/icons/tendering.png",
    accent: "#111827",
  },
  {
    id: "sim",
    name: "SIM",
    description: "Shipping Import Management System",
    url: "https://sim.myanmar-brewery.com/",
    logo: "/icons/sim.jpg",
    accent: "#fbbc04",
  },
  {
    id: "der",
    name: "DER",
    description: "MBL Draught Empty Return",
    url: "https://der.myanmar-brewery.com/",
    logo: "/icons/sim.jpg",
    accent: "#24292f",
  },
]