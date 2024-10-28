import logofooter from "../assets/logofooter.svg"

const Footer = () => {
  return (
    <section id="footer" className="w-full h-full border bt-[#212121] pt-[100px] pb-[48px] mt-[200px]">
      <div className="mx-[200px] flex flex-col">
        <div className="flex items-start justify-between mb-[200px]">
          <img src={logofooter} alt="" />
          <div className="flex gap-[48px]">
            <div id="navigation" className="flex flex-col gap-[24px] w-2/4">
              <p className="font-bold text-[16px]">Navigation</p>
              <a href="" className="text-[16px]">Home</a>
              <a href="" className="text-[16px]">About</a>
              <a href="" className="text-[16px]">Features</a>
            </div>
            <div id="about" className="flex flex-col gap-[24px] w-2/4">
              <p className="font-bold text-[16px]">About</p>
              <a href="" className="text-[16px]">Terms and Services</a>
              <a href="" className="text-[16px]">Privacy</a>
              <a href="" className="text-[16px]">Certifications</a>
            </div>
            <div id="contact" className="flex flex-col gap-[24px] w-2/4">
              <p className="font-bold text-[16px]">Contact</p>
              <a href="" className="text-[16px]">+1 01234567 (U.S.A.)</a>
              <a href="" className="text-[16px]">2101 Old Town Road, Nebula, Milkyway.</a>
              <a href="" className="text-[16px]">info@MXcom</a>
            </div>
          </div>
        </div>
        <div id="line" className="w-full h-[1.5px] bg-[#21212140]"></div>
        <div className="flex items-center justify-between mt-[24px]">
          <p className="text-[16px] font-bold text-[#21212140]">Copyright ©2024 MangoX</p>
          <p className="text-[16px] font-bold text-[#21212140]">All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer