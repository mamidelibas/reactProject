import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import ExploreIcon from "@mui/icons-material/Explore";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

export default function NavMenu() {
  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      title: "Message",
      icon: <MessageIcon />,
    },
    {
      title: "Explore",
      icon: <ExploreIcon />,
    },
    {
      title: "Live",
      icon: <LiveHelpIcon />,
    },
    {
      title: "Saved",
      icon: <CollectionsBookmarkIcon />,
    },
  ];

  return (
    <div>
      <nav aria-label="main mailbox folders">
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </div>
  );
}
