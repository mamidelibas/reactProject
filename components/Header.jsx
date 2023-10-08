import Avatar from "@mui/material/Avatar";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function Header() {
  return (
    <>
      <header className="flex justify-around py-5 px-5 w-full items-center mt-3 border-b-2 border-gray-200">
        <div className="flex items-center gap-1.5">
          <CameraAltOutlinedIcon
            className="border rounded-full p-1 bg-rose-700"
            fontSize="large"
            style={{ fill: "#fff" }}
          />
          <h1 className="text-xl font-bold text-rose-700">forToday</h1>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search now..."
            className="rounded-full border pl-2"
            style={{ width: "500px" }}
          />
        </div>

        <div className="flex items-center gap-12">
          <div>
            <HeadsetMicIcon
              className="border rounded-full p-0.5"
              fontSize="large"
            />
          </div>
          <div>
            <NotificationsNoneIcon
              className="border rounded-full p-0.5"
              fontSize="large"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">Vinc.rangga</span>

            <Avatar sx={{ bgcolor: deepOrange[500] }}>MD</Avatar>
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
      </header>
    </>
  );
}
