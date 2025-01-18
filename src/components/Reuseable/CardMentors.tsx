import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const CardMentors = () => {
  return (
    <div className="flex flex-col rounded-[20px] bg-white accentuedDropShadow overflow-hidden">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQHrT6zBAnondQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727031609722?e=1742428800&v=beta&t=LmkU48mTTwZrGzZ0FAg5ZbxGCh9lOfDz6ZQx3pcaA-E"
        alt=""
        className="h-[230px] w-[238px] object-cover"
      />
      <div className="flex flex-col p-[30px] gap-[10px] items-center justify-center">
        <h5 className="text-center text-text">Julian Jameson</h5>
        <span className="small text-secondText text-center">Profession</span>
        <div className="flex items-center gap-[20px]">
          <FaFacebook className="text-[24px] text-primary" />
          <IoLogoInstagram className="text-[24px] text-primary" />
          <FaTwitter className="text-[24px] text-primary" />
        </div>
      </div>
    </div>
  );
};

export default CardMentors;
