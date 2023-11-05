import ContentArea from "@/components/ContentArea";
import Header from "@/components/Header";
import HeaderMoile from "@/components/Header-Mobile";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div>
      <div className="md:block hidden">
        <Header />
      </div>
      <div className="md:hidden block">
        <HeaderMoile />
      </div>
      <div className="flex p-12 gap-20">
        <div className="w-1/5 md:block hidden">
          <LeftSidebar />
        </div>
        <div className="md:w-3/5 w-full">
          <ContentArea />
        </div>
        <div className="w-1/5 md:block hidden">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
