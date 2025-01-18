import CardMentors from "./Reuseable/CardMentors";

const PopularCourses = () => {
  return (
    <section className="flex flex-col gap-[112px]">
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-primary ">Team</h6>
        <h3 className="text-text ">Our Popular Courses</h3>
        <p className="text-secondText  max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex gap-[30px] items-center justify-between">
        <CardMentors />
        <CardMentors />
        <CardMentors />
        <CardMentors />
      </div>
    </section>
  );
};

export default PopularCourses;
