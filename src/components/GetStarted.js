import arrow from "../assets/arrow.svg"

const GetStarted = () => {
  return (
    <section id="getStarted" className="scroll-mt-48 flex flex-col py-[64px] px-[48px] items-center border-2 border-[#212121] w-3/4 rounded-[16px] mx-auto gap-[48px]">
      <h2 className="text-[40px] font-bold text-center">
        Make an account and start your business with MangoX now!
      </h2>
      <a href="" className="bg-white flex w-fit gap-[16px] border border-[#212121] rounded-[8px] px-[32px] py-[12px] font-semibold shadow-3d hover:bg-[#DACDF4] transition duration-300">
        Get Started
        <img src={arrow} alt="" />
      </a>
    </section>
  )
}

export default GetStarted