import React from 'react'
import styles from '../styles'
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Review() {
    return (
        <section className={`${styles.outerWrapper} py-20 relative group text-white bg-cover bg-center `} style={{ backgroundImage: "url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1790&userId=&cache=v2')" }}>
            <div className="absolute  inset-0 bg-black opacity-50 transition-opacity duration-300"></div>
            {/* <div className={`${styles.wrapper}`}>
            </div> */}
            <div className={`${styles.wrapper} relative z-20 flex flex-col items-center gap-6`}>
                <p className='font-medium'>What our customer says</p>

                <RiDoubleQuotesL size={40} fill='#eab308' />

                <p className='italic text-xl text-center'>Share a real testimonial that hits some of your benefits
                    (but isn't too sales-y).</p>

                <div className='flex flex-col items-center gap-2'>
                    <div className='flex items-center justify-center bg-slate-600 w-[100px] h-[100px] rounded-full'>
                        {/* <FaUser size={40} fill='#eab308' /> */}
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png" alt="" />
                    </div>
                    <div>

                        <p>REAL NAME</p>
                        <p>LOCATION</p>
                    </div>
                    <div className='flex gap-2'>
                        <FaStar fill='#eab308' />
                        <FaStar fill='#eab308' />
                        <FaStar fill='#eab308' />
                        <FaStar fill='#eab308' />
                        <FaStar fill='#eab308' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review