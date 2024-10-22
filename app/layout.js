import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "What Bytes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="flex bg-white h-16 sticky w-screen shadow-sm">Header</header>
        <section className=" bg-white w-full h-full flex">
          <div className="xl:w-60 w-20 sm:w-40 "><Sidebar/></div>
          <div className="flex-1">
          {children}
          </div>
        </section>
      </body>
    </html>
  );
}
