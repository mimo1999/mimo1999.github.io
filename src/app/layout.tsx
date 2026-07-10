import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maitreya Mohapatra — AI Engineer",
  description:
    "Building production-ready AI systems, multimodal healthcare solutions, and scalable MLOps infrastructure. 5+ years, 8 enterprise deployments, 2 patents.",
  keywords: [
    "AI Engineer",
    "MLOps",
    "Healthcare AI",
    "Machine Learning",
    "LLM",
    "RAG",
    "Multi-Agent Systems",
  ],
  authors: [{ name: "Maitreya Mohapatra" }],
  openGraph: {
    title: "Maitreya Mohapatra — AI Engineer",
    description:
      "Building production-ready AI systems, multimodal healthcare solutions, and scalable MLOps infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
