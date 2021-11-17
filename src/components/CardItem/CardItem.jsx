import React from "react";
import imagePlaceholder from "./images/300placeholder.png";
import options from "./images/ellipsis-h-solid.svg";
import like from "./images/like.svg";
import comment from "./images/comment.svg";
import send from "./images/send.svg";
import save from "./images/save.svg";
import smile from "./images/smile.svg";
import "./CardItem.css"

function CardItem({ avatar = imagePlaceholder, title, image = imagePlaceholder, hashtags, postText, likes}) {
  return (     
      <div className="post">
      <div className="info">
                    <div className="user">
                        <div className="profile-pic"><img src={avatar} alt=""/></div>
                        <p className="username">{title}</p>
                    </div>
                    <img src={options} className="options" alt=""/>
                </div>
                <img src={image} className="post-image" alt=""/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src={like} className="icon" alt=""/>
                        <img src={comment} className="icon" alt=""/>
                        <img src={send} className="icon" alt=""/>
                        <img src={save} className="save icon" alt=""/>
                    </div>
                    <p className="likes">{likes} likes</p>
                    <p className="description"><span>{title}</span><p className="hashtags">{hashtags}</p> {postText}</p>
                    <p className="post-time">2 minutes ago</p>
                </div>
                <div className="comment-wrapper">
                    <img src={smile} className="icon" alt=""/>
                    <input type="text" className="comment-box" placeholder="Add a comment"/>
                    <button className="comment-btn">post</button>
                </div>
      </div>
  );
}

export default CardItem;
