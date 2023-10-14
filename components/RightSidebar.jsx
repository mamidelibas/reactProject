import CardDesing from "./RightSidebarComponents/CardDesing";
import PopularProfileCard from "./RightSidebarComponents/PopularProfiles";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-10">
      <CardDesing
        cardTitle="Popular Profiles"
        cardComponent={<PopularProfileCard />}
      />
      <CardDesing cardTitle="Trending Post" cardComponent="Deneme" />
    </div>
  );
}
