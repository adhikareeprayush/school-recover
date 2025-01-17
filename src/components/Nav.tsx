const Nav = () => {
  return (
    <section className="flex items-center justify-between w-full">
      <h3>Brandname</h3>
      <div className="flex items-center gap-5 text-secondText link text-center">
        <span>Home</span>
        <span>Product</span>
        <span>Pricing</span>
        <span>Contact</span>
      </div>
      <div className="flex items-center gap-[44px]">
        <button className="btn text-primary">Login</button>
        <button className="btn px-[25px] py-[15px] rounded-[5px] bg-primary text-white">
          Join Us -{">"}
        </button>
      </div>
    </section>
  );
};

export default Nav;
