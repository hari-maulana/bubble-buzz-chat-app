import "./ChatBox.css";
// @ts-ignore
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Gaga Richard <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
