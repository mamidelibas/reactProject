import ContentArea from "@/components/ContentArea";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        <div className="w-1/4 bg-gray-100">
          <LeftSidebar />
        </div>
        <div className="w-2/4 bg-gray-400">
          <ContentArea />
        </div>
        <div className="w-1/4 bg-gray-800">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
