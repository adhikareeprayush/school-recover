import TeacherCard from "./Reuseable/TeacherCard";

const ExpertTeachers = () => {
  return (
    <section className="flex flex-col gap-[80px] bg-fadedSecondary2">
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-primary ">Practice Advice</h6>
        <h2 className="text-text ">Our Experts Teacher</h2>
        <p className="text-secondText  max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex items-center gap-[30px] justify-between">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </section>
  );
};

export default ExpertTeachers;
