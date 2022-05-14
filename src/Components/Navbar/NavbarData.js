import React from "react";
import { ReactComponent as HomeIcon } from "../../Assets/home.svg";
import { ReactComponent as BookmarkIcon } from "../../Assets/bookmark.svg";
import { ReactComponent as ProfileIcon } from "../../Assets/profile.svg";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Bookmark",
    path: "/bookmark",
    icon: <BookmarkIcon />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <ProfileIcon />,
    cName: "nav-text",
  },
];
