import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0e1423]/90  w-full ">
      <Navbar />
      <main className="min-h-screen "> {children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
