import "../App.css";
import hero from "../assets/hero.svg";
import arrow from "../assets/arrow.svg";
import clients from "../assets/clients.svg";

const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="flex pt-[80px] gap-[80px] items-start">
        <div className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[24px] w-full">
              <h2 className="font-bold text-[60px] leading-tight">
                MangoX makes it easy to run your business.
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur. Vitae ultrices risus.
              </p>
            </div>
            <a
              href=""
              className="bg-white flex w-fit gap-[16px] border border-[#212121] rounded-[8px] px-[32px] py-[12px] font-semibold shadow-3d hover:bg-[#DACDF4] transition duration-300"
            >
              Get Started
              <img src={arrow} alt="" />
            </a>
          </div>
          <div className="flex gap-[8px] items-center font-bold">
            <img src={clients} alt="" />
            <span>+3K Clients</span>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
