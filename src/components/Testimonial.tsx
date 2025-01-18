import TestimonialCard from "./Reuseable/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="flex flex-col gap-[80px]">
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-primary ">Practice Advice</h6>
        <h2 className="text-text ">Every Client Matters</h2>
        <p className="text-secondText  max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex gap-[30px] items-center justify-between">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonial;
