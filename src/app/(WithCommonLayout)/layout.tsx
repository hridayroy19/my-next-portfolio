import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900  w-full ">
      <Navbar />
      <main className="min-h-screen lg:py-12 py-24 md:py-14 "> {children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
