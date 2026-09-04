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



// import "./globals.css";

// import { Space_Grotesk, Inter } from "next/font/google";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import MLSCBackground from "@/components/MLSCBackground";

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-display",
//   display: "swap",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-body",
//   display: "swap",
// });

// export const metadata = {
//   title: "MLSC × SU",
//   description:
//     "Microsoft Learn Student Community at Siddhartha University.",
//   icons: {
//     icon: "/images/mlsc-su-logo.png",
//     shortcut: "/images/mlsc-su-logo.png",
//     apple: "/images/mlsc-su-logo.png",
//   },
//   themeColor: "#020817",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${spaceGrotesk.variable} ${inter.variable}`}
//     >
//       <body
//         className="relative min-h-screen bg-[#020817] text-white antialiased"
//         style={{ fontFamily: "var(--font-body)" }}
//       >
//         {/* Shared ambient background */}
//         <div className="pointer-events-none fixed inset-0 -z-10">
//           <MLSCBackground />
//         </div>

//         <Navbar />

//         <div className="relative">{children}</div>

//         <Footer />
//       </body>
//     </html>
//   );
// }



import "./globals.css";

import { Space_Grotesk, Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MLSCBackground from "@/components/MLSCBackground";

// Display face for headings/wordmarks, body face for everything else.
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
  themeColor: "#020817",
};

// IMPORTANT: Navbar, MLSCBackground and Footer live ONLY here. Do not
// import or render any of them inside individual page.js files — every
// page automatically gets them through this layout. Rendering them again
// inside a page will duplicate the navbar/background/footer on that route.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        className="relative min-h-screen bg-[#020817] text-white antialiased"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* Ambient background — fixed behind every route, painted once */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <MLSCBackground />
        </div>

        <Navbar />

        <div className="relative">{children}</div>

        <Footer />
      </body>
    </html>
  );
}