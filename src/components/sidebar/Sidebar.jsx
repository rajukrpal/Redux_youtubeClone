import React from "react";
import { SlHome } from "react-icons/sl";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebaritem = [
    {
      icon: <SlHome size={18} />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <SlHome size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
    {
      icon: <MdOutlineSubscriptions size={18} />,
      title: "Subscriptions",
    },
  ];

  let open = useSelector((state)=>state.app.open);
  console.log("chack open value",open)

  return (
    <>
    <div className=" h-[94vh] overflow-auto">
      <div className="">
        {sidebaritem.map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-4 pl-10 py-2 cursor-pointer">
            {item.icon}
            <span className={open ? "" : "hidden"}>{item.title}</span>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
