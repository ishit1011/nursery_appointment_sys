import NurseryCard from '../../components/Nurserys/NurseryCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useEffect, useState } from 'react'


const Nurserys = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');

  const handleSearch = () =>{
    setQuery(query.trim())
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700)


    return ()=> clearTimeout(timeout)
  },[query])

  const {data: nurserys,loading,error} = useFetchData(`${BASE_URL}/nurserys?query=${query}`)

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
              value={query}
              onChange={e=>setQuery(e.target.value)}
              className='py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor ' 
              placeholder='Search Nurseryby name / specialization' />
              <button onClick={handleSearch} className='btn mt-0 rounded-[0px] rounded-r-md '>
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
          {loading && <Loader />}
          {error && <Error/>}
          { !loading && !error && 
            (<div className="w-full lg:w-[470px] mx-auto mb-10 ">
            <h2 className="heading text-center">What our customer say</h2>
              
            <p className="text__para text-center">
              Country's best plant providing services for everyone. Quality plants
              after direct meeting between seller & buyer.
            </p>
          </div>)}

          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Nurserys;
