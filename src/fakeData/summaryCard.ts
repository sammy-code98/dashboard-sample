import {
  MdPeopleAlt,
  MdFolderShared,
  MdContactPage,
  MdAccountBalance,
  MdCardGiftcard,
} from "react-icons/md";

export const summaryCard = [
  {
    title: "Total Users",
    cardIcon: MdPeopleAlt,
    totalValue: "2468",
    description: "Registered today:",
    descValue: "20",
    link: "/total-users",
  },
  {
    title: "Vendors",
    cardIcon: MdFolderShared,
    totalValue: "1290",
    description: "Registered today:",
    descValue: "20",
    link: "#",
  },
  {
    title: "Clients",
    cardIcon: MdContactPage,
    totalValue: "1135",
    description: "Registered today:",
    descValue: "20",
    link: "#",
  },
  {
    title: "Businesses",
    cardIcon: MdAccountBalance,
    totalValue: "1378",
    description: "Created today:",
    descValue: "10",
    link: "#",
  },
  {
    title: "Services",
    cardIcon: MdCardGiftcard,
    totalValue: "6789",
    description: "Created today:",
    descValue: "10",
    link: "#",
  },
];
