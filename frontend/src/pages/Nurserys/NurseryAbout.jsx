import React from 'react'
import { formateDate } from '../../utils/formateDate'

const NurseryAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
                    Bloom Haven
                </span>
            </h3>
            <p className='text__para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Commodi accusantium eaque fugit, dolores ipsa minima nesciunt 
                accusamus quasi saepe sed, modi similique consectetur, sunt 
                deserunt. Repudiandae provident a debitis enim. Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Quos perspiciatis omnis ea eum 
                optio officia est incidunt facere ut numquam.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
                Nursery Details
            </h3>
            
            <ul className='pt-4 md:p-5'>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                            {formateDate("12-04-2010")} - {formateDate("10-14-2015")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">
                            Specialty in Roses and Exotic Plants
                        </p>
                    </div>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                    Green Thumb Nursery, New York
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                            {formateDate("09-23-2017")} - {formateDate("02-30-2022")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">
                            Specialty in Roses and Exotic Plants
                        </p>
                    </div>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                    Green Thumb Nursery, New York
                    </p>
                </li>
            </ul>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
                Milestones
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
                <li className="p-4 rounded bg-[#fff9ea] ">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor ">
                        India's Best Nursery 2013
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Green Thumb Nursery, New York
                    </p>
                </li>

                <li className="p-4 rounded bg-[#fff9ea] ">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor ">
                        India's Best Nursery 2013
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Green Thumb Nursery, New York
                    </p>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default NurseryAbout