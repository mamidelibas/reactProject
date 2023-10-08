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
      <div className="flex p-5 gap-5">
        <div className="w-1/4">
          <LeftSidebar />
        </div>
        <div className="w-2/4">
          <ContentArea />
        </div>
        <div className="w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
