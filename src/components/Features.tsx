import {
  MdOutlineSchool,
  MdOutlineComputer,
  MdOutlineHeadphones,
  MdOutlineVerified,
} from "react-icons/md";
import { IoBookOutline, IoTrophyOutline } from "react-icons/io5";

const features = [
  {
    icon: <MdOutlineSchool className="text-primary text-[40px]" />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience in their respective fields.",
  },
  {
    icon: <IoBookOutline className="text-primary text-[40px]" />,
    title: "Quality Content",
    description:
      "Access comprehensive course materials designed to help you master new skills effectively.",
  },
  {
    icon: <MdOutlineComputer className="text-primary text-[40px]" />,
    title: "Online Learning",
    description:
      "Study at your own pace from anywhere in the world with our flexible online platform.",
  },
  {
    icon: <MdOutlineHeadphones className="text-primary text-[40px]" />,
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our dedicated support team available around the clock.",
  },
  {
    icon: <MdOutlineVerified className="text-primary text-[40px]" />,
    title: "Certification",
    description:
      "Earn recognized certificates upon completion to showcase your achievements.",
  },
  {
    icon: <IoTrophyOutline className="text-primary text-[40px]" />,
    title: "Career Growth",
    description:
      "Advance your career with skills that employers are actively looking for today.",
  },
];

const Features = () => {
  return (
    <section className="flex flex-col gap-[80px] bg-lightGray">
      <div className="flex flex-col gap-[10px] items-center text-center">
        <h6 className="text-primary">Why Choose Us</h6>
        <h2 className="text-text">Platform Features</h2>
        <p className="text-secondText max-w-[480px]">
          Discover the advantages of learning with our platform and how we can
          help you achieve your goals.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-[20px] p-[35px] bg-white accentuedDropShadow rounded-[10px]"
          >
            <div className="flex items-center justify-center w-[70px] h-[70px] bg-fadedPrimary rounded-full">
              {feature.icon}
            </div>
            <h5 className="text-text">{feature.title}</h5>
            <p className="text-secondText">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
