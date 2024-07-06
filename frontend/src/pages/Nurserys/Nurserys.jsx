import NurseryCard from '../../components/Nurserys/NurseryCard'
import {nurserys} from '../../assets/data/nurserys'
import Testimonial from '../../components/Testimonial/Testimonial'

const Nurserys = () => {
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className="heading">
            Find a Nursery
          </h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#00ff8423] rounded-md flex items-center justify-between ">
            <input 
              type="search" 
              className='py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor ' 
              placeholder='Search Nursery' />
              <button className='btn mt-0 rounded-[0px] rounded-r-md '>
                Search
              </button>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
            {nurserys.map((nursery) => (
                <NurseryCard key={nursery.id} nursery={nursery} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="w-full lg:w-[470px] mx-auto mb-10 ">
            <h2 className="heading text-center">What our customer say</h2>
              
            <p className="text__para text-center">
              Country's best plant providing services for everyone. Quality plants
              after direct meeting between seller & buyer.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Nurserys;
