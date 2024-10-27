import img3 from '../assets/img3.svg'
import check from '../assets/check.svg'
import arrow from '../assets/arrow.svg'

const Feature2 = () => {
  return (
    <section id="feature2" className="flex gap-[100px]">
      <img src={img3} alt="" />
      <div className="flex flex-col gap-[32px] ">
        <span className="font-black text-[16px] py-[4px] px-[12px] bg-[#FBEE9D] border-2 border-[#212121] rounded-[6px] w-fit">
          VERSATILE TEMPLATES
        </span>
        <h2 className="text-[40px] font-bold">
          Product personality to suit any brand
        </h2>
        <div className="flex flex-col gap-[16px]">
          <p className="text-[16px] font-medium flex gap-[12px]">
            <img src={check} alt="" />
            Personal-brand-touch to your own projects.
          </p>
          <p className="text-[16px] font-medium flex gap-[12px]">
            <img src={check} alt="" />
            Delivering top-notch projects in minutes
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
    </section>
  );
}

export default Feature2