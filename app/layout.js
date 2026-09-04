// import "./globals.css";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export const metadata = {
//   title: "MLSC × SU",
//   description:
//     "Microsoft Learn Student Community at Siddhartha University.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#020817] text-white antialiased">
//         <Navbar />

//         {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }



import "./globals.css";

import { Space_Grotesk, Inter } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "MLSC × SU",
  description:
    "Microsoft Learn Student Community at Siddhartha University.",
  icons: {
    icon: "/images/mlsc-su-logo.png",
    shortcut: "/images/mlsc-su-logo.png",
    apple: "/images/mlsc-su-logo.png",
  },
};

export const viewport = {
  themeColor: "#020817",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body
        className="relative min-h-screen bg-[#020817] text-white antialiased"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}