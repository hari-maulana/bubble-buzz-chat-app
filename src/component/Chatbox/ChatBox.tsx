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

      <div className="chat-message">
        <div className="s-message">
          <p className="message">Lorem ipsum, dolor sit amet ...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p className="time">10:30 AM</p>
          </div>
        </div>

        <div className="s-message">
          <img className="message-image" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p className="time">10:30 AM</p>
          </div>
        </div>

        <div className="r-message">
          <p className="message">Lorem ipsum, dolor sit amet ...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p className="time">10:30 AM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send your message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
