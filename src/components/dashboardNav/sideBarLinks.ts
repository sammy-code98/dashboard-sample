import {
  MdDashboard,
  MdOutlineLogout,
  MdOutlineAutoGraph,
  MdCardGiftcard,
  MdAccountBalance,
} from "react-icons/md";

export const SideBarLinks = [
  { title: "Dashboard", linkIcon: MdDashboard, linkName: "/dashboard" },
  { title: "Sales", linkIcon: MdOutlineAutoGraph, linkName: "#" },
  { title: "Services", linkIcon: MdCardGiftcard, linkName: "#" },
  { title: "Business", linkIcon: MdAccountBalance, linkName: "#" },

  { title: "Logout", linkIcon: MdOutlineLogout, linkName: "#" },
];
