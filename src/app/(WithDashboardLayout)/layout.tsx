import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/sidbar/Sidebar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="p-4 pt-0 min-h-screen">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
