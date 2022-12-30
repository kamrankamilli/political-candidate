import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { ImWarning } from "react-icons/im";

export const TOAST_PROPERTIES = [
  {
    id: Math.floor(Math.random() * 101 + 1),
    title: "Başarı",
    backgroundColor: "#5cb85c",
    icon: <FaRegCheckCircle style={{ fontSize: "2.4em" }} />,
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    title: "Hata",
    backgroundColor: "#d9534f",
    icon: <BiErrorCircle style={{ fontSize: "2.4em" }} />,
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    title: "Info",
    backgroundColor: "#5bc0de",
    icon: <BsInfoCircle style={{ fontSize: "2.4em" }} />,
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    title: "Warning",
    backgroundColor: "#f0ad4e",
    icon: <ImWarning style={{ fontSize: "2.4em" }} />,
  },
];
