import image1 from '../assets/image.png'
import image2 from '../assets/image-1.png'
import image3 from '../assets/image-2.png'
import image4 from '../assets/image-3.png'
import image5 from '../assets/image-4.png'
import image6 from '../assets/image-5.png'

const Testi = () => {
  return (
    <section id="testimonials" className='flex flex-col gap-[68px]'>
      <div id="title" className="flex flex-col items-center justify-center gap-[32px]">
        <span className="font-black text-[16px] py-[4px] px-[12px] bg-[#BEEAEF] border-2 border-[#212121] rounded-[6px] w-fit">
          TESTIMONIALS
        </span>
        <h2 className="w-[40%] text-center text-[40px] font-bold">
          See what our clients have to say
        </h2>
      </div>
      <div id='grid' className="grid grid-cols-3 grid-rows-2 gap-[68px]">
        <div id='card' className="size-full bg-green-white border border-[#212121] p-[32px] rounded-[16px] shadow-3d2">
          <img src={image1} alt="" width="66px"/>
          <p className="text-[16px] font-medium mt-[32px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.
          </p>
          <h3 className='font-bold text-[16px]'>John Doe</h3>
        </div>
        <div id='card' className="size-full bg-green-white border border-[#212121] p-[32px] rounded-[16px] shadow-3d2">
          <img src={image2} alt="" width="66px"/>
          <p className="text-[16px] font-medium mt-[32px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.
          </p>
          <h3 className='font-bold text-[16px]'>Jane Doe</h3>
        </div>
        <div id='card' className="size-full bg-green-white border border-[#212121] p-[32px] rounded-[16px] shadow-3d2">
          <img src={image3} alt="" width="66px"/>
          <p className="text-[16px] font-medium mt-[32px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.
          </p>
          <h3 className='font-bold text-[16px]'>Odd Doe</h3>
        </div>
        <div id='card' className="size-full bg-green-white border border-[#212121] p-[32px] rounded-[16px] shadow-3d2">
          <img src={image4} alt="" width="66px"/>
          <p className="text-[16px] font-medium mt-[32px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.
          </p>
          <h3 className='font-bold text-[16px]'>Won Doe</h3>
        </div>
        <div id='card' className="size-full bg-green-white border border-[#212121] p-[32px] rounded-[16px] shadow-3d2">
          <img src={image5} alt="" width="66px"/>
          <p className="text-[16px] font-medium mt-[32px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.
          </p>
          <h3 className='font-bold text-[16px]'>Ho Doe</h3>
        </div>
        <div id='card' className="size-full bg-green-white border border-[#212121] p-[32px] rounded-[16px] shadow-3d2">
          <img src={image6} alt="" width="66px"/>
          <p className="text-[16px] font-medium mt-[32px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.
          </p>
          <h3 className='font-bold text-[16px]'>Tutu Doe</h3>
        </div>
      </div>
    </section>
  )
}

export default Testi