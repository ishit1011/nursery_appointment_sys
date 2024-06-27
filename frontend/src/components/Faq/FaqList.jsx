import React from 'react'
import {faqs} from '../../assets/data/faq'
import FaqItems from './FaqItems'

const FaqList = () => {
  return (
    <ul className='mt-[38px] ' >
        {faqs.map((item,index) => (
            <FaqItems item={item} index={index} />
        ))}
    </ul>
  )
}

export default FaqList