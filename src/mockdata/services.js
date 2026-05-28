import { Building2, Users, TrendingUp, FileCheck } from "lucide-react";

export const ucaServices = [
  {
    id: "company-setup-advisory",
    title: "Company Setup Advisory and Consulting",
    icon: Building2,
    description:
      "Launch with confidence! We sit down with you, understand your business model, and guide you through the full company registration process in Vietnam.",
    features: [
      "Business model consultation",
      "Company registration guidance",
      "Legal setup support",
      "Step-by-step advisory",
    ],
    highlight: true,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "virtual-assistants",
    title: "Virtual Assistants and Project Support",
    icon: Users,
    description:
      "Virtual assistants help you work smarter and faster. We handle the operational legwork so you can focus on scaling your business.",
    features: [
      "Admin & operational support",
      "Task outsourcing",
      "Project coordination",
      "Productivity optimization",
    ],
    highlight: true,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: "sales-ops-audit",
    title: "Sales and Operations Audits and Consulting",
    icon: TrendingUp,
    description:
      "Find gaps, fix inefficiencies, and optimize your processes. We help you improve performance across sales and operations.",
    features: [
      "Process audit",
      "Sales funnel optimization",
      "Operational efficiency review",
      "Performance improvement strategy",
    ],
    highlight: true,
    color: "from-violet-500 to-fuchsia-500",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },

  {
    id: "insurance-work-permit-payroll",
    title: "Insurance, Work Permit, TRC, and Payroll",
    icon: FileCheck,
    description:
      "Solo? Small team? Big team?! Dealing with HR admin can be a hassle. United has solutions suitable for your business!",
    features: [
      "Work permit processing",
      "Temporary Residence Card (TRC) support",
      "Insurance registration & compliance",
      "Payroll management services",
    ],
    highlight: true,
    color: "from-rose-500 to-orange-400",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default ucaServices;
