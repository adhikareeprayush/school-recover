import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMiniChevronRight } from "react-icons/hi2";

const TeacherCard = () => {
  return (
    <div className="flex flex-col bg-white w-[348px]">
      <div className="image-container relative">
        <img
          className="w-full h-[300px] object-cover"
          src="https://media.licdn.com/dms/image/v2/D4D03AQHrT6zBAnondQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727031609722?e=1742428800&v=beta&t=LmkU48mTTwZrGzZ0FAg5ZbxGCh9lOfDz6ZQx3pcaA-E"
          alt=""
        />
        <div className="px-[10px] bg-danger text-white absolute top-2 left-2 rounded-[3px] border-0 lightDropShadow">
          <h6 className="w-fit">Sale</h6>
        </div>
        <div className="flex items-center gap-[10px] absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="bg-white rounded-full p-[10px]">
            <IoMdHeartEmpty className=" text-[20px]" />
          </span>
          <span className="bg-white rounded-full p-[10px]">
            <IoMdHeartEmpty className=" text-[20px]" />
          </span>
          <span className="bg-white rounded-full p-[10px]">
            <IoMdHeartEmpty className=" text-[20px]" />
          </span>
        </div>
      </div>
      <div className="flex flex-col p-[25px] gap-[10px]">
        <div className="flex items-center justify-between">
          <span className="link text-primary">Training Courses</span>
          <div className="flex items-center bg-text p-[5px] rounded-full gap-[5px]">
            <MdOutlineStarPurple500 className="text-[16px] text-secondary" />
            <span className="text-white small">4.5</span>
          </div>
        </div>
        <h5 className="text-text">Get Quality Education</h5>
        <p className="text-secondText">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex items-center gap-[10px]">
          <MdOutlineFileDownload className="text-[24px]" />
          <h6 className="text-secondText">15 Sales</h6>
        </div>
        <div className="flex items-center gap-[10px]">
          <h5 className="text-muted">$16.48</h5>
          <h5 className="text-secondary">$6.48</h5>
        </div>
        <button className="px-[20px] py-[10px] rounded-[37px] border-[1px] border-primary text-primary flex items-center gap-[10px] justify-center w-fit">
          <h6>Learn More</h6>
          <HiMiniChevronRight className="text-primary font-bold text-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
