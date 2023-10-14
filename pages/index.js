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
      <div className="flex p-12 gap-20">
        <div className="w-2/12">
          <LeftSidebar />
        </div>
        <div className="w-7/12">
          <ContentArea />
        </div>
        <div className="w-3/12">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
