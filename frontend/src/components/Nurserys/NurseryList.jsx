import React from 'react'
import NurseryCard from './NurseryCard'
import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'


const NurseryList = () => {

  const {data: nurserys,loading,error} = useFetchData(`${BASE_URL}/nurserys`)

  return (
    <>
    {loading && <Loader />}
    {error && <Error/>}
      {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            {nurserys.map((nursery) => (
                <NurseryCard key={nursery._id} nursery={nursery} />
            ))}
        </div>
      )}
    </>
  )
}

export default NurseryList