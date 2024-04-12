import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative bg-dark-2">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          {children}
          <Toaster/>
        </section>
      </div>
    </main>
  );
};

export default Layout;
