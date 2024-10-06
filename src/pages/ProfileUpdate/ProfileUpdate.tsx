import "./ProfileUpdate.css";
// @ts-ignore
import assets from "../../assets/assets";

const ProfileUpdate = () => {
  return (
    <div className="profile">
      <div className="profile container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input type="file" id="avatar" accept=".jpg, .jpeg, .png" hidden />
            <img src={assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input type="text" placeholder="your name" required />
          <textarea placeholder="Write your bio" id=""></textarea>
          <button>Save</button>
        </form>
        <img src={assets.logo_icon} alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
