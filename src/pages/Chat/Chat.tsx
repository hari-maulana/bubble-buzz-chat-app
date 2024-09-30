import ChatBox from "../../component/Chatbox/ChatBox";
import LeftSidebar from "../../component/LeftSIdebar/LeftSidebar";
import RightSideBar from "../../component/RightSidebar/RightSideBar";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container"></div>
      <LeftSidebar />
      <ChatBox />
      <RightSideBar />
    </div>
  );
};

export default Chat;
