import { Poppins } from "next/font/google";
import { LanguageProvider } from "@/components/common/LanguageProvider";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Rêve | Business Setup In UAE",
  description:
    "Rêve helps global entrepreneurs launch, operate, and scale businesses in the UAE with end-to-end setup support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="mx-auto w-full  overflow-hidden bg-white">
          <LanguageProvider>{children}</LanguageProvider>
        </div>
      </body>
    </html>
  );
}
