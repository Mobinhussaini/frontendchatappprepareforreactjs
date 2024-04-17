import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import "./chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);
  
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior: "smooth"})
  }, []); 

  const hanldeEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
          <img src="./avatar.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              ipsum voluptatem, tenetur fuga quam alias consectetur iure ipsa
              labore necessitatibus libero aliquid recusandae a asperiores
             
            </p>
            <span>1 min ago </span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              ipsum voluptatem, tenetur fuga quam alias consectetur iure ipsa
              labore necessitatibus libero aliquid recusandae a asperiores
              officia quo maiores dolorum explicabo vero m labore iusto quas fugit odio.
            </p>
            <span>1 min ago </span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              ipsum voluptatem, tenetur fuga quam alias quas fugit odio.
            </p>
            <span>1 min ago </span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
          <img src="./avatar.png" alt="" />
            <p>
              Pnecessitatibus corrupti
              officia ut expedita nemo. Nam labore iusto quas fugit odio.
            </p>
            <span>1 min ago </span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <span>1 min ago </span>
          </div>
        </div>
        
        <div ref={endRef}>

        </div>

      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={hanldeEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
