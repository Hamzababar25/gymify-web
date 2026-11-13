import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Health disclaimer" };

export default function Page() {
  return <LegalPage doc="health" />;
}
