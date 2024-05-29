// import React, { useState } from 'react'
// import { FcSearch } from "react-icons/fc";
// import { IoFilterSharp } from "react-icons/io5";

// import { BsToggle2Off } from "react-icons/bs";
// import { BsToggle2On } from "react-icons/bs";

// const Navbar = ({ bgColor, color, toggleButton, toggle }) => {
//     const bgcolor = color == "black" ? "#cbc5c5" : "black"
//     return (
//         <>
//             <div className="nav_bar"
//                 style={{ backgroundColor: `${bgcolor}` }}>
//                 <div className="logo" style={{
//                     backgroundColor: `${bgColor}`,
//                     color: '${color}'
//                 }}>
//                     mylogo
//                     <div onClick={toggleButton}>{toggle ? (
//                         <BsToggle2On />
//                     ) : (<BsToggle2Off />
//                     )}</div>
//                 </div>
//                 <div className="search" style={{
//                     backgroundColor: `${bgColor}`,
//                     color: `${color}`
//                 }}>
//                     <div className="left"><FcSearch /> Search here</div>
//                     <div className="right"> <IoFilterSharp />Filters</div>




//                 </div>
//                 <div className="seller" style={{
//                     backgroundColor: `${bgColor}`,
//                     color: `${color}`
//                 }}>Became a Seller</div>

//             </div>
//         </>
//     );
// };

// export default Navbar;
import React from 'react';
import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

const Navbar = ({ bgColor, color, toggleButton, toggle }) => {
    const backgroundColor = color === "black" ? "#cbc5c5" : "black";

    return (
        <div className="nav_bar" style={{ backgroundColor: backgroundColor }}>
            <div className="logo" style={{ backgroundColor: bgColor, color: color }}>
                mylogo
                <div onClick={toggleButton}>
                    {toggle ? <BsToggle2On /> : <BsToggle2Off />}
                </div>
            </div>
            <div className="search" style={{ backgroundColor: bgColor, color: color }}>
                <div className="left"><FcSearch /> Search here</div>
                <div className="right"><IoFilterSharp />Filters</div>
            </div>
            <div className="seller" style={{ backgroundColor: bgColor, color: color }}>
                Became a Seller
            </div>
        </div>
    );
};

export default Navbar;
