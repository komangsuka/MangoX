import img2 from '../assets/img2.svg'

const Feature1 = () => {
  return (
    <section id="feature1" className='flex gap-[100px] items-start'>
      <div className="flex flex-col gap-[32px]">
        <span className='font-black text-[16px] py-[4px] px-[12px] bg-[#F0C6C0] border-2 border-[#212121] rounded-[6px] w-fit'>SAVE TIME AND BUILD BETTER</span>
        <h2 className='text-[40px] font-bold'>Build digital products for all types of customers</h2>
        <p className='text-[16px] font-medium'>Lorem ipsum dolor sit amet consectetur. Arcu fringilla tellus lobortis mus. Eget lectus lacus gravida augue amet sed.</p>
      </div>
      <img src={img2} alt="" />
    </section>
  )
}

export default Feature1