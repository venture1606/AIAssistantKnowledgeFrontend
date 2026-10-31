import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Knowbase AI", description: "Evidence-grounded team knowledge" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
