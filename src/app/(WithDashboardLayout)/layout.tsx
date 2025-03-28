import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/sidbar/Sidebar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-between mx-auto">
      <div className="lg:w-[300px] border-2 ">
        <Sidebar />
      </div>
      <div className=" w-full">
        <Header />
        <main className="p-4 pt-0 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default CommonLayout;
