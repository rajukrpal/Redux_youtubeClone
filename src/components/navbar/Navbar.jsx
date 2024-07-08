import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import {useDispatch} from "react-redux"
import { toggleSidebar } from "../../../store/appSlise";
import Avatar from "react-avatar";

const Navbar = () => {
    const dispatch = useDispatch()
    
    const togalHendalr =()=>{
        console.log("raju")
        dispatch(toggleSidebar())
    }
  return (
    <>
      <div className="flex items-center justify-between py-1 px-10 ">
        <div className="flex items-center gap-4">
          <div>
            <HiOutlineMenu onClick={togalHendalr} size={20} />
          </div>
          <div>
            <img
              className="w-16 h-10"
              src="navbar/youtube_logo.png"
              alt="youtube"
            />
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex items-center w-[100%] gap-4">
            <div className="flex w-full items-center p-1 border border-black rounded-full bg-gray-200">
              <div className="">
                <IoIosSearch className="" size={20} />
              </div>
              <div className="w-full rounded-full ">
                <input
                  className=" w-full bg-gray-200 outline-none  px-2"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <button>
                <IoIosSearch size={20} />
              </button>
            </div>
            <button>
              <FaMicrophone size={16} />
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <button>
              <MdOutlineVideoCall size={24} />
            </button>
            <button>
              <IoMdNotificationsOutline size={20} />
            </button>
            <button>
              <Avatar src="navbar/avtar.png" size={30} round={true} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
