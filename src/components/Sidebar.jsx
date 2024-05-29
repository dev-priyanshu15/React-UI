import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosChatboxes } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

const Sidebar = ({bgColor,color}) => {
  return (
    <>
    <div className="side_bar_content" style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
  }}>
      <div className="top_content">
        <div className="items">< FaHome className ="icons"/> Home</div>
        <div className="items"><MdNotifications className ="icons"/> Notification</div>
        <div className="items"> < HiMiniShoppingBag className ="icons"/> Shop</div>
        <div className="items"><IoIosChatboxes className ="icons"/> Conversation</div>
        <div className="items"><IoWallet className ="icons"/> Wallet</div>
        <div className="items"><MdSubscriptions className ="icons"/> Subscription</div>
        <div className="items"><CgProfile className ="icons"/> My Profile</div>
      </div>
      <div className="bottom_content items "><TbLogout className ="icons"/> Log Out</div>
    </div>
    
    </>
  );
};

export default Sidebar;