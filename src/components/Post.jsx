import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Post = ({data, bgColor, color}) => {
  return (
    <>
      <div className="post_container" style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
  }}>
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={data.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="dot"><BsThreeDotsVertical /></div>
        </div>
        <p>{data.description}</p>
        <div className="post_img">
          <img src={data.mImg} alt="" />
        </div>
        <div className="like_comment">
          <div className="likes"><IoIosHeart className='items'/>{data.like}{" "}k</div>
          <div className="comments"><FaComment className='items'/>{data.comment}{" "}k</div>
          <div className="share"><FaShare className='items'/>{data.share}{" "}k</div>

        </div>
      </div>



    </>
  );
};

export default Post;
//image are taken from pixabay
//copy image address
//2post k liy app.jsx me <post/> ek baar or