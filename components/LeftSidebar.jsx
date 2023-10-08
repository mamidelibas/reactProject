import Messages from "./LeftSidebarComponents/Messages";
import NavMenu from "./LeftSidebarComponents/NavMenu";
import Divider from "@mui/material/Divider";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-10">
      <NavMenu />
      <Divider />
      <Messages />
    </div>
  );
}
