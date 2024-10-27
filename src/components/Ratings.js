import stars from '../assets/stars.svg'

const Ratings = () => {
  return (
    <section id="ratings" className=''>
      <div className="flex py-[48px] px-[64px] items-center justify-between bg-[#BEEAEF] shadow-3d border border-[#212121] rounded-[16px]">
        <div className="flex flex-col gap-[24px] w-[40%]">
          <h2 className="text-[40px] font-bold m-0">
            100,000+ happy clients.
          </h2>
          <p className="text-[16px] font-medium flex gap-[12px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex gap-[32px] items-center">
          <div id='rate' className=''>
            <h3 className='text-[40px] font-bold'>4.9</h3>
            <p className='text-[16px] font-semibold mt-[10px] mb-[16px]'>3,343 average rating</p>
            <img src={stars} alt="" />
          </div>
          <div id='rate' className=''>
            <h3 className='text-[40px] font-bold'>A+</h3>
            <p className='text-[16px] font-semibold mt-[10px] mb-[16px]'>512 customer reviews</p>
            <img src={stars} alt="" />
          </div>
          <div id='rate' className=''>
            <h3 className='text-[40px] font-bold'>4.8</h3>
            <p className='text-[16px] font-semibold mt-[10px] mb-[16px]'>322 user reviews</p>
            <img src={stars} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ratings