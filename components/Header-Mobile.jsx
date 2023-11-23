import Logo from "@/public/logo.png";
import { useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Box, IconButton, Typography } from "@mui/material";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-3 py-6 border-b-2 border-gray-200">
      <Image src={Logo} height={45} />

      <IconButton
        className="flex items-center gap-3"
        onClick={() => setIsOpen(true)}
      >
        {/* <MenuIcon sx={{ fontSize: 28 }} onClick={() => setIsDrawerOpen(true)} /> */}
        <MenuIcon sx={{ fontSize: 28 }} />
      </IconButton>

      <Drawer open={isOpen} anchor="left" onClose={() => setIsOpen(false)}>
        <Box
          className="h-screen"
          sx={{
            width: "18rem",
            backgroundColor: "#CECECE",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Typography variant="h6" component="div">
            <a href="#">PANEL</a>
          </Typography>
        </Box>
      </Drawer>

      {/* {isDrawerOpen && (
        <div className="fixed z-50 top-0 left-0 bg-gray-200 w-full h-full p-6">
          <div className="flex justify-between items-center w-full">
            <h1>User Menu</h1>
            <span className="bg-gray-300 p-3 rounded" onClick={() => setIsDrawerOpen(false)}>X</span>
          </div>
        </div>
      )} */}
    </header>
  );
}
