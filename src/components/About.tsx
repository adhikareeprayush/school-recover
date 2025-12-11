import { HiMiniChevronRight } from "react-icons/hi2";

const About = () => {
  return (
    <section className="flex items-center justify-between flex-wrap gap-[60px]">
      <div className="flex flex-col gap-[35px] xl:w-[500px] lg:w-[450px]">
        <hr className="w-[94px] h-[7px] bg-danger" />
        <h6 className="text-primary">About Us</h6>
        <h2 className="text-text">
          We're Dedicated to Empowering Learners Worldwide
        </h2>
        <p className="text-secondText">
          Founded in 2020, our mission is to make quality education accessible
          to everyone, regardless of their background or location. We believe
          that learning should be engaging, practical, and tailored to
          individual needs.
        </p>
        <p className="text-secondText">
          Our team of expert educators and industry professionals work
          tirelessly to create comprehensive courses that prepare students for
          real-world challenges. With over 25,000 students across 15 countries,
          we're proud to be a trusted name in online education.
        </p>
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
            <p className="text-text font-bold">
              Industry-recognized certifications
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
            <p className="text-text font-bold">
              Hands-on project-based learning
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
            <p className="text-text font-bold">Career support and mentorship</p>
          </div>
        </div>
        <button className="flex items-center text-primary w-fit">
          <span className="link">Learn More About Us</span>
          <HiMiniChevronRight className="text-[24px]" />
        </button>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="flex flex-col items-center justify-center p-[30px] bg-fadedPrimary rounded-[10px]">
            <h1 className="text-primary">5+</h1>
            <h6 className="text-text text-center">Years of Experience</h6>
          </div>
          <div className="flex flex-col items-center justify-center p-[30px] bg-fadedSecondary1 rounded-[10px]">
            <h1 className="text-hover">200+</h1>
            <h6 className="text-text text-center">Expert Instructors</h6>
          </div>
          <div className="flex flex-col items-center justify-center p-[30px] bg-fadedSecondary2 rounded-[10px]">
            <h1 className="text-danger">500+</h1>
            <h6 className="text-text text-center">Courses Available</h6>
          </div>
          <div className="flex flex-col items-center justify-center p-[30px] bg-lightGray rounded-[10px]">
            <h1 className="text-success">98%</h1>
            <h6 className="text-text text-center">Student Satisfaction</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
