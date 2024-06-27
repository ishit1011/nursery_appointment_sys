import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
       <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
            {/* ==================== about img =========================*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1 ">
                <img src={aboutImg} alt="" className="rounded-2xl" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                    <img src={aboutCardImg} alt="" className="rounded-3xl shadow-lg" />
                </div>
            </div>


            {/* ==================== about content =========================*/}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
                <h2 className="heading">Nation's first nursery plant suppliers</h2>
                <p className="text__para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem magni, 
                    ipsa corporis ea assumenda rem! Sint magni unde quia eligendi non blanditiis 
                    enim, animi aspernatur similique exercitationem, distinctio, omnis voluptate.
                </p>

                <p className="text__para mt-[30px] ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem magni, 
                    ipsa corporis ea assumenda rem! Sint magni unde quia eligendi non blanditiis 
                    enim, animi aspernatur similique exercitationem, distinctio, omnis voluptate.
                </p>

                <Link to='/' >
                    <button className="btn">Learn More</button>
                </Link>

            </div>

        </div>
       </div> 
    </section>
  )
}

export default About