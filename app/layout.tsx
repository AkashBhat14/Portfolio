import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash Bhat | Blue Team Security Engineer & AI Automation Specialist",
  description: "Cybersecurity practitioner with strong blue team orientation and hands-on experience in threat detection and SIEM engineering. Proficient with Wazuh, ELK Stack, and Azure Sentinel.",
  keywords: ["cybersecurity", "blue team", "SIEM", "Wazuh", "ELK Stack", "Azure Sentinel", "AI automation"],
  authors: [{ name: "Akash Bhat" }],
  openGraph: {
    title: "Akash Bhat | Blue Team Security Engineer",
    description: "Cybersecurity practitioner specializing in threat detection, SIEM engineering, and AI automation.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a192f] text-[#ccd6f6] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
