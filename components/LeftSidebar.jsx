import Messages from "./LeftSidebarComponents/Messages";
import NavMenu from "./LeftSidebarComponents/NavMenu";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-3">
      <NavMenu />
      <Divider />
      <Messages />
      <Divider />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <SettingsIcon
            style={{ color: "rgb(87 83 78)", fontSize: "1.8rem" }}
          />
          <span className="text-stone-600">Settings</span>
        </div>
        <div className="flex items-center gap-5 text-rose-500">
          <LogoutIcon style={{ fontSize: "1.8rem" }} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
