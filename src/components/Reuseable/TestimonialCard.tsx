import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const TestimonialCard = () => {
  return (
    <div className="p-[25px] ">
      <div className="flex flex-col p-[30px] gap-[15px] items-center">
        <div className="flex items-center gap-[5px]">
          <MdOutlineStarPurple500 className="text-[24px] text-secondary" />
          <MdOutlineStarPurple500 className="text-[24px] text-secondary" />
          <MdOutlineStarPurple500 className="text-[24px] text-secondary" />
          <MdOutlineStarOutline className="text-[24px] text-secondary" />
          <MdOutlineStarOutline className="text-[24px] text-secondary" />
        </div>
        <p className="text-center text-secondText max-w-[150px]">
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </p>
        <div className="flex items-center gap-[15px]">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHrT6zBAnondQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727031609722?e=1742428800&v=beta&t=LmkU48mTTwZrGzZ0FAg5ZbxGCh9lOfDz6ZQx3pcaA-E"
            alt=""
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h6 className="text-primary">Prayush Adhikari</h6>
            <span className="small text-text">Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
