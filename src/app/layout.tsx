import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gymify.pk"),
  title: {
    default: "Gymify — workouts built for your gym",
    template: "%s · Gymify",
  },
  description:
    "Gymify plans each workout from the equipment in your gym, fits it into the time you have, and tells you what to lift next time.",
  openGraph: {
    siteName: "Gymify",
    type: "website",
    url: "https://gymify.pk",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B5D3B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
