import Logo from "@/public/logo.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function Header() {
  return (
    <header className="flex justify-between px-7 py-6 border-b-2 border-gray-200">
      <Image src={Logo} height={55} />

      <TextField
        id="outlined-basic"
        placeholder="Search now..."
        sx={{
          width: "750px",
          borderRadius: "500px",
        }}
        InputProps={{
          style: {
            borderRadius: "1000px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <div className="flex items-center gap-3">
        <HeadsetMicIcon
          sx={{
            fontSize: 42,
            color: "#374151",
            border: "1px solid #e5e7eb",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <NotificationsIcon
          sx={{
            fontSize: 42,
            color: "#374151",
            border: "1px solid #e5e7eb",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <span className="text-xl font-bold ml-7">Vinc.ragga</span>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>VR</Avatar>
        <ExpandMoreIcon sx={{ fontSize: 28 }} />
      </div>
    </header>
  );
}
