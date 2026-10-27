import { createFileRoute } from "@tanstack/react-router";
import { KarkaNexusPage } from "@/components/KarkaNexusPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KARKA NEXUS — AI & Tech Academy" },
      { name: "description", content: "Learn AI, software and emerging technologies with practical, project-driven programs at KARKA NEXUS." },
      { property: "og:title", content: "KARKA NEXUS — AI & Tech Academy" },
      { property: "og:description", content: "Practical, project-driven tech learning paths in AI, data, full-stack and cloud." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KarkaNexusPage,
});
